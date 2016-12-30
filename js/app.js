

$(document).ready(function(){
   

    //set up event listeners
    document.body.addEventListener('touchmove', function(e)
    {
        e.preventDefault();
    }, false);

    // making use of 'transitionend' event
    document.getElementById('panelsContainer').addEventListener('transitionend',
        function(e)
        {
            var srcEl = e.srcElement;
            if (srcEl.id == 'panelsContainer')
            {
                if (parseInt(srcEl.style.left) == '-360')
                {
                    $('#forecast table td.icon img').css('width', '95%');
                }
                else
                {
                    $('#forecast table td.icon img').css('width', '55%');
                }
            }
        }, false);

    /*navigation buttons*/
    $('nav span.current').on('click', function()
    {
        $('#panelsContainer').css('left', '0');
        $('#navTracker').css('left', '0');
    });
    $('nav span.forecast').on('click', function()
    {
        $('#panelsContainer').css('left', '-360px');
        $('#navTracker').css('left', '180px');
    });

    // touch functionality borrowed heavily from the following article on javascriptkit.com
    // see: http://www.javascriptkit.com/javatutors/touchevents.shtml
    function ontouch(el, callback)
    {
        var touchSurface = el,
            dir, swipeType, startX, startY, distX, distY,
            threshold = 10,
            restraint = 100,
            allowedTime = 5000,
            elapsedTime, startTime,
            handleTouch = callback;

        touchSurface.addEventListener('touchstart', function(e)
        {
            e.preventDefault();
            var touchObj = e.changedTouches[0];

            dir = 'none';
            swipeType = 'none';
            dist = 0;
            startX = touchObj.pageX;
            startY = touchObj.pageY;
            startTime = new Date().getTime();

            handleTouch(e, 'none', 'start', swipeType, 0);

        }, false);

        touchSurface.addEventListener('touchmove', function(e)
        {
            e.preventDefault();
            var touchObj = e.changedTouches[0];

            distX = touchObj.pageX - startX,
                distY = touchObj.pageY - startY;

            if (Math.abs(distX) > Math.abs(distY))
            { // consider this a horizontal movement
                dir = (distX < 0) ? 'left' : 'right';
                handleTouch(e, dir, 'move', swipeType, distX);
            }
            else
            { // consider this a vertical movement
                dir = (distY < 0) ? 'up' : 'down';
                handleTouch(e, dir, 'move', swipeType, distY);
            }

        }, false);

        touchSurface.addEventListener('touchend', function(e)
        {
            e.preventDefault();
            elapsedTime = new Date().getTime() - startTime;
            if (elapsedTime <= allowedTime)
            {
                if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint)
                {
                    swipeType = dir;
                }
                else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint)
                {
                    swipeType = dir;
                }
            }
            handleTouch(e, dir, 'end', swipeType, (dir == 'left' || dir == 'right') ? distX : distY);
        }, false);

    }

    /*
     *  initializes screen
     *  (navigator.geolocation.getCurrentPosition is asynchronous)
     * */
    function init()
    {
        navigator.geolocation.getCurrentPosition(function(position)
        {
            //console.log(position.coords)
            getWeatherData(position.coords);
            getForecastData(position.coords);
        }, function(e)
        {
            alert('Error getting geolocation position: ' + e.message)
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 60000
        });
    }

    

    var ul = document.getElementById('panelsContainer'),
        listCount = ul.getElementsByTagName('li').length,
        currentIdx = 0;

    ontouch(ul, function(evt, dir, phase, swipeType, distance)
    {
        var container = document.getElementById('appContainer');
        if (phase == 'start')
        {
            var ulLeft = parseInt(ul.style.left) || 0;
            el.style.left = ulLeft + 'px';
        }
        else if (phase == 'move' && (dir == 'left' || dir == 'right'))
        {
            var totalDist = distance + ulLeft;
            ul.style.left = Math.min(totalDist, (currentIdx + 1) * container.offsetWidth) + 'px';
        }
        else if (phase == 'end')
        {
            if (swipeType == 'left' || swipeType == 'right')
            {
                currentIdx = (swipeType == 'left') ? Math.min(currentIdx + 1, listCount - 1) : Math.max(currentIdx - 1, 0);
            }
            //move the nav tracker
            if (swipeType == 'left')
            {
                $('#navTracker').css('left', '180px');
                $('#forecast table td.icon img').css('width', '95%');
            }
            if (swipeType == 'right')
            {
                $('#navTracker').css('left', '0');
                $('#forecast table td.icon img').css('width', '55%');
            }
        }
        setTimeout(function()
        {
            ul.style.left = -currentIdx * container.offsetWidth + 'px';
        }, 1);
    });



    
});