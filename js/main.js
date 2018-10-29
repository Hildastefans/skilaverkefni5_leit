
/** CARDS **/

/** Finna HTML elementin */
var addCardDiv = document.getElementById ("addCardDiv")
var myDiv = document.getElementById ("cardsDiv")
var showAddCardDiv = document.getElementById("showAddCardDiv")

var addCardButton = document.getElementById ("addCardButton")
var refreshCardsButton = document.getElementById ("refresh")
var clearInputsButton = document.getElementById ("clearButton")

var pictureInput = document.getElementById ("picture")
var headlineInput = document.getElementById ("headline")
var textInput = document.getElementById ("text")
var button1Input = document.getElementById ("button1")
var button2Input = document.getElementById ("button2")
var weatherTextInput = document.getElementById ("weatherText")
var weatherIconInput = document.getElementById ("weatherIcon")


var searchInput = document.getElementById ("myInputSearch")

/** Búa til array til að geyma kortin, það er bara notað ef valið er að teikna öll kortin aftur með því að smella á refresh **/
var cards = [
    {
        title: "Hong Kong",
        photo: "https://www.s-ge.com/sites/default/files/cserver/styles/sge_header_xl/streamy/company/images/Hongkong-Fotolia-48687313-rabbit75-fot-282451.jpg?itok=Ejk5mqSH",
        subText: "Hong Kong welcomes with an iconic skyline, a legendary kitchen, and lush, protected nature where rare birds and colourful traditions thrive. Hong Kong is a former British colony.",
        buttonText1: "Secret Spots",
        buttonText2: "Beaches",
        weatherForecastText: "28° sunny; humid",
        weatherForecastSvg: `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 12.9939C18.82 12.9939 13 18.8129 13 25.9929C13 33.1739 18.82 38.9949 26 38.9949C33.18 38.9949 39 33.1739 39 25.9929C39 18.8129 33.18 12.9939 26 12.9939ZM26 36.9949C19.935 36.9949 15 32.0589 15 25.9929C15 19.9289 19.935 14.9939 26 14.9939C32.065 14.9939 37 19.9289 37 25.9929C37 32.0599 32.065 36.9949 26 36.9949Z" fill="black"/>
        <path d="M26.993 0H24.993V10H26.993V0Z" fill="black"/>
        <path d="M26.993 42H24.993V52H26.993V42Z" fill="black"/>
        <path d="M9.993 25H0V27H9.993V25Z" fill="black"/>
        <path d="M52 25H41.993V27H52V25Z" fill="black"/>
        <path d="M45.08 8.31728L43.6658 6.90308L36.3056 14.2633L37.7198 15.6775L45.08 8.31728Z" fill="black"/>
        <path d="M6.89677 43.6734L8.31097 45.0876L15.6719 37.7267L14.2577 36.3125L6.89677 43.6734Z" fill="black"/>
        <path d="M15.6753 14.2687L8.31512 6.90845L6.90092 8.32265L14.2611 15.6829L15.6753 14.2687Z" fill="black"/>
        <path d="M36.3094 37.7277L43.6714 45.0886L45.0856 43.6742L37.7236 36.3133L36.3094 37.7277Z" fill="black"/>
        </svg>
        `,
    },
    {
        title: "Singapore",
        photo: "https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fblogs-images.forbes.com%2Falexcapri%2Ffiles%2F2018%2F09%2FSingapore-1200x800.jpg",
        subText: "Singapore is much more than the sum of its numerous attractions. It’s constantly evolving, reinventing, and reimagining itself, with people who are passionate about creating new possibilities.",
        buttonText1: "Secret Spots",
        buttonText2: "Beaches",
        weatherForecastText: "24° Thunderstorm",
        weatherForecastSvg: `<svg width="53" height="44" viewBox="0 0 53 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
        <path d="M43.628 13.029C42.032 5.584 35.421 0 27.501 0C21.078 0 15.524 3.678 12.799 9.035C12.533 9.017 12.269 8.995 11.999 8.995C5.372 8.995 0 14.367 0 20.995C0 27.602 5.34 32.96 11.938 32.993V32.996H13V30.996H12.396L11.949 30.993C6.463 30.966 2 26.48 2 20.995C2 15.481 6.485 10.995 11.999 10.995C12.174 10.995 12.346 11.009 12.519 11.02L12.667 11.03L13.983 11.118L14.581 9.942C17.073 5.043 22.024 2 27.501 2C34.291 2 40.251 6.814 41.673 13.448L41.99 14.93L43.504 15.025C47.707 15.287 51 18.788 51 22.996C51 27.393 47.435 30.973 43.043 30.996C42.993 30.993 42.95 30.991 42.906 30.989L42 30.996V32.996H42.863V32.989C42.909 32.99 42.954 32.996 43 32.996C48.521 32.996 53 28.519 53 22.996C53 17.686 48.855 13.354 43.628 13.029Z" fill="black"/>
        <path d="M14.0004 27.9887L20.4149 37.1487L22.0523 36.0021L15.6378 26.8421L14.0004 27.9887Z" fill="black"/>
        <path d="M31.9755 27.9884L38.3901 37.1484L40.0275 36.0018L33.6129 26.8418L31.9755 27.9884Z" fill="black"/>
        <path d="M28.842 36.0001H30.611H31.042H33.052L26.638 26.8391L25 27.9861L29.211 34.0001H27.44H25L26.271 35.8161L27.384 37.4051L32 44.0001L33.639 42.8541L29.022 36.2581L28.842 36.0001Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0">
        <rect width="53" height="44" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        `,
    },
    {
        title: "London",
        photo: "https://www.100resilientcities.org/wp-content/uploads/2017/06/London-hero-crop.jpg",
        subText: "Welcome to Visit London, your official city guide to London, England. Find things to do in London, days out in London, London attractions and sightseeing, rants and hotels in London.",
        buttonText1: "City",
        buttonText2: "History",
        weatherForecastText: "10° Cloudy",
        weatherForecastSvg: `<svg width="53" height="45" viewBox="0 0 53 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
        <path d="M32.521 36.6691L25.638 26.8391L24 27.9861L30.883 37.8161L31.995 39.4051L35.471 44.3691L37.109 43.2231L33.634 38.2581L32.521 36.6691Z" fill="black"/>
        <path d="M40.522 36.6671L33.638 26.8391L32 27.9871L38.886 37.8151L39.891 39.2511L43.475 44.3661L45.113 43.2201L41.529 38.1041L40.522 36.6671Z" fill="black"/>
        <path d="M24.521 36.6691L17.638 26.8391L16 27.9871L22.883 37.8161L24.067 39.5091L27.472 44.3701L29.109 43.2231L25.706 38.3611L24.521 36.6691Z" fill="black"/>
        <path d="M43.628 13.029C42.032 5.584 35.421 0 27.501 0C21.078 0 15.524 3.678 12.799 9.035C12.533 9.017 12.269 8.995 11.999 8.995C5.372 8.995 0 14.367 0 20.995C0 27.602 5.34 32.96 11.938 32.993V32.996H14V30.996H12.396L11.949 30.993C6.463 30.966 2 26.48 2 20.995C2 15.481 6.485 10.995 11.999 10.995C12.174 10.995 12.346 11.009 12.519 11.02L12.667 11.03L13.983 11.118L14.581 9.942C17.073 5.043 22.024 2 27.501 2C34.291 2 40.251 6.814 41.673 13.448L41.99 14.93L43.504 15.025C47.707 15.287 51 18.788 51 22.996C51 27.393 47.435 30.973 43.043 30.996C42.993 30.993 42.95 30.991 42.906 30.989L41.863 30.996H42V32.996H42.863V32.989C42.909 32.99 42.954 32.996 43 32.996C48.521 32.996 53 28.519 53 22.996C53 17.686 48.855 13.354 43.628 13.029Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0">
        <rect width="53" height="44.37" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        
        `,
    },
    {
        title: "New York",
        photo: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/01/31/09/new-york-main-image.jpg?w968h681",
        subText: "lNew York is a state that’s both familiar and full of surprises. From the thrill of deep-sea fishing off the shores of Long Island to tranquil hiking and paddling in the Adirondack Mountains, there are four seasons of attractions here, whether you’re indoors or out.",
        buttonText1: "Secret Spots",
        buttonText2: "Culture",
        weatherForecastText: "15° sunny",
        weatherForecastSvg: `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 12.9939C18.82 12.9939 13 18.8129 13 25.9929C13 33.1739 18.82 38.9949 26 38.9949C33.18 38.9949 39 33.1739 39 25.9929C39 18.8129 33.18 12.9939 26 12.9939ZM26 36.9949C19.935 36.9949 15 32.0589 15 25.9929C15 19.9289 19.935 14.9939 26 14.9939C32.065 14.9939 37 19.9289 37 25.9929C37 32.0599 32.065 36.9949 26 36.9949Z" fill="black"/>
        <path d="M26.993 0H24.993V10H26.993V0Z" fill="black"/>
        <path d="M26.993 42H24.993V52H26.993V42Z" fill="black"/>
        <path d="M9.993 25H0V27H9.993V25Z" fill="black"/>
        <path d="M52 25H41.993V27H52V25Z" fill="black"/>
        <path d="M45.08 8.31728L43.6658 6.90308L36.3056 14.2633L37.7198 15.6775L45.08 8.31728Z" fill="black"/>
        <path d="M6.89677 43.6734L8.31097 45.0876L15.6719 37.7267L14.2577 36.3125L6.89677 43.6734Z" fill="black"/>
        <path d="M15.6753 14.2687L8.31512 6.90845L6.90092 8.32265L14.2611 15.6829L15.6753 14.2687Z" fill="black"/>
        <path d="M36.3094 37.7277L43.6714 45.0886L45.0856 43.6742L37.7236 36.3133L36.3094 37.7277Z" fill="black"/>
        </svg>
        `,
    },
    {
        title: "Paris",
        photo: "https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/paris/eiffel-tower-paris-p.jpg?imwidth=1240",
        subText: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du ",
        buttonText1: "Secret Spots",
        buttonText2: "History",
        weatherForecastText: "13° Rain",
        weatherForecastSvg: `<svg width="53" height="45" viewBox="0 0 53 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
        <path d="M32.521 36.6691L25.638 26.8391L24 27.9861L30.883 37.8161L31.995 39.4051L35.471 44.3691L37.109 43.2231L33.634 38.2581L32.521 36.6691Z" fill="black"/>
        <path d="M40.522 36.6671L33.638 26.8391L32 27.9871L38.886 37.8151L39.891 39.2511L43.475 44.3661L45.113 43.2201L41.529 38.1041L40.522 36.6671Z" fill="black"/>
        <path d="M24.521 36.6691L17.638 26.8391L16 27.9871L22.883 37.8161L24.067 39.5091L27.472 44.3701L29.109 43.2231L25.706 38.3611L24.521 36.6691Z" fill="black"/>
        <path d="M43.628 13.029C42.032 5.584 35.421 0 27.501 0C21.078 0 15.524 3.678 12.799 9.035C12.533 9.017 12.269 8.995 11.999 8.995C5.372 8.995 0 14.367 0 20.995C0 27.602 5.34 32.96 11.938 32.993V32.996H14V30.996H12.396L11.949 30.993C6.463 30.966 2 26.48 2 20.995C2 15.481 6.485 10.995 11.999 10.995C12.174 10.995 12.346 11.009 12.519 11.02L12.667 11.03L13.983 11.118L14.581 9.942C17.073 5.043 22.024 2 27.501 2C34.291 2 40.251 6.814 41.673 13.448L41.99 14.93L43.504 15.025C47.707 15.287 51 18.788 51 22.996C51 27.393 47.435 30.973 43.043 30.996C42.993 30.993 42.95 30.991 42.906 30.989L41.863 30.996H42V32.996H42.863V32.989C42.909 32.99 42.954 32.996 43 32.996C48.521 32.996 53 28.519 53 22.996C53 17.686 48.855 13.354 43.628 13.029Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0">
        <rect width="53" height="44.37" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        
        `,
    },
    {
        title: "Rome",
        photo: "https://travelpassionate.com/wp-content/uploads/2017/12/Colosseum-with-clear-blue-sky-Rome-Italy.-Rome-landmark-and-antique-architecture.-Rome-Colosseum-is-one-of-the-best-known-monuments-of-Rome-and-Italy-min.jpg",
        subText: "Rome, Italy’s capital, is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art, architecture and culture on display. Ancient ruins such as the Forum and the Colosseum evoke the power of the former Roman Empire. Vatican City, headquarters of the Roman",
        buttonText1: "Secret Spots",
        buttonText2: "History",
        weatherForecastText: "16° sunny",
        weatherForecastSvg: `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 12.9939C18.82 12.9939 13 18.8129 13 25.9929C13 33.1739 18.82 38.9949 26 38.9949C33.18 38.9949 39 33.1739 39 25.9929C39 18.8129 33.18 12.9939 26 12.9939ZM26 36.9949C19.935 36.9949 15 32.0589 15 25.9929C15 19.9289 19.935 14.9939 26 14.9939C32.065 14.9939 37 19.9289 37 25.9929C37 32.0599 32.065 36.9949 26 36.9949Z" fill="black"/>
        <path d="M26.993 0H24.993V10H26.993V0Z" fill="black"/>
        <path d="M26.993 42H24.993V52H26.993V42Z" fill="black"/>
        <path d="M9.993 25H0V27H9.993V25Z" fill="black"/>
        <path d="M52 25H41.993V27H52V25Z" fill="black"/>
        <path d="M45.08 8.31728L43.6658 6.90308L36.3056 14.2633L37.7198 15.6775L45.08 8.31728Z" fill="black"/>
        <path d="M6.89677 43.6734L8.31097 45.0876L15.6719 37.7267L14.2577 36.3125L6.89677 43.6734Z" fill="black"/>
        <path d="M15.6753 14.2687L8.31512 6.90845L6.90092 8.32265L14.2611 15.6829L15.6753 14.2687Z" fill="black"/>
        <path d="M36.3094 37.7277L43.6714 45.0886L45.0856 43.6742L37.7236 36.3133L36.3094 37.7277Z" fill="black"/>
        </svg>
        `,
    },
    {
        title: "København",
        photo: "https://blog.hotelspecials.dk/wp-content/uploads/sites/9/2017/08/kop-1170x780.jpg",
        subText: "København, Denmark’s capital, sits on the coastal islands of Zealand and Amager. It’s linked to Malmo in southern Sweden by the Öresund Bridge. Indre By, the city's historic center, contains Frederiksstaden, an 18th-century rococo district, home to the royal family’s Amalienborg Palace. ",
        buttonText1: "Secret Spots",
        buttonText2: "Culture",
        weatherForecastText: "8° Rain",
        weatherForecastSvg: `<svg width="53" height="45" viewBox="0 0 53 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
        <path d="M32.521 36.6691L25.638 26.8391L24 27.9861L30.883 37.8161L31.995 39.4051L35.471 44.3691L37.109 43.2231L33.634 38.2581L32.521 36.6691Z" fill="black"/>
        <path d="M40.522 36.6671L33.638 26.8391L32 27.9871L38.886 37.8151L39.891 39.2511L43.475 44.3661L45.113 43.2201L41.529 38.1041L40.522 36.6671Z" fill="black"/>
        <path d="M24.521 36.6691L17.638 26.8391L16 27.9871L22.883 37.8161L24.067 39.5091L27.472 44.3701L29.109 43.2231L25.706 38.3611L24.521 36.6691Z" fill="black"/>
        <path d="M43.628 13.029C42.032 5.584 35.421 0 27.501 0C21.078 0 15.524 3.678 12.799 9.035C12.533 9.017 12.269 8.995 11.999 8.995C5.372 8.995 0 14.367 0 20.995C0 27.602 5.34 32.96 11.938 32.993V32.996H14V30.996H12.396L11.949 30.993C6.463 30.966 2 26.48 2 20.995C2 15.481 6.485 10.995 11.999 10.995C12.174 10.995 12.346 11.009 12.519 11.02L12.667 11.03L13.983 11.118L14.581 9.942C17.073 5.043 22.024 2 27.501 2C34.291 2 40.251 6.814 41.673 13.448L41.99 14.93L43.504 15.025C47.707 15.287 51 18.788 51 22.996C51 27.393 47.435 30.973 43.043 30.996C42.993 30.993 42.95 30.991 42.906 30.989L41.863 30.996H42V32.996H42.863V32.989C42.909 32.99 42.954 32.996 43 32.996C48.521 32.996 53 28.519 53 22.996C53 17.686 48.855 13.354 43.628 13.029Z" fill="black"/>
        </g><defs><clipPath id="clip0">
        <rect width="53" height="44.37" fill="white"/></clipPath></defs></svg>
        `,
    },
    {
        title: "Helsinki",
        photo: "https://www.thenational.ae/image/policy:1.684363:1513240429/wk15-travel-24h-helsinki05.jpg?f=16x9&w=1200&$p$f$w=b2455ec",
        subText: "Helsinki, Finland’s southern capital, sits on a peninsula in the Gulf of Finland. Its central avenue, Mannerheimintie, is flanked by institutions including the National Museum, tracing Finnish history from the Stone Age to the present. Also on Mannerheimintie are the imposing Parliament House and Kiasma, a contemporary art museum",
        buttonText1: "Secret Spots",
        buttonText2: "Culture",
        weatherForecastText: "11° Rain",
        weatherForecastSvg: `<svg width="53" height="45" viewBox="0 0 53 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
        <path d="M32.521 36.6691L25.638 26.8391L24 27.9861L30.883 37.8161L31.995 39.4051L35.471 44.3691L37.109 43.2231L33.634 38.2581L32.521 36.6691Z" fill="black"/>
        <path d="M40.522 36.6671L33.638 26.8391L32 27.9871L38.886 37.8151L39.891 39.2511L43.475 44.3661L45.113 43.2201L41.529 38.1041L40.522 36.6671Z" fill="black"/>
        <path d="M24.521 36.6691L17.638 26.8391L16 27.9871L22.883 37.8161L24.067 39.5091L27.472 44.3701L29.109 43.2231L25.706 38.3611L24.521 36.6691Z" fill="black"/>
        <path d="M43.628 13.029C42.032 5.584 35.421 0 27.501 0C21.078 0 15.524 3.678 12.799 9.035C12.533 9.017 12.269 8.995 11.999 8.995C5.372 8.995 0 14.367 0 20.995C0 27.602 5.34 32.96 11.938 32.993V32.996H14V30.996H12.396L11.949 30.993C6.463 30.966 2 26.48 2 20.995C2 15.481 6.485 10.995 11.999 10.995C12.174 10.995 12.346 11.009 12.519 11.02L12.667 11.03L13.983 11.118L14.581 9.942C17.073 5.043 22.024 2 27.501 2C34.291 2 40.251 6.814 41.673 13.448L41.99 14.93L43.504 15.025C47.707 15.287 51 18.788 51 22.996C51 27.393 47.435 30.973 43.043 30.996C42.993 30.993 42.95 30.991 42.906 30.989L41.863 30.996H42V32.996H42.863V32.989C42.909 32.99 42.954 32.996 43 32.996C48.521 32.996 53 28.519 53 22.996C53 17.686 48.855 13.354 43.628 13.029Z" fill="black"/>
        </g><defs><clipPath id="clip0">
        <rect width="53" height="44.37" fill="white"/></clipPath></defs></svg>
        `,
    },
    {
        title: "Tokyo",
        photo: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/10/13/tokyo-main.jpg?w968h681",
        subText: "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens.",
        buttonText1: "Secret Spots",
        buttonText2: "Culture",
        weatherForecastText: "23° sunny",
        weatherForecastSvg: `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 12.9939C18.82 12.9939 13 18.8129 13 25.9929C13 33.1739 18.82 38.9949 26 38.9949C33.18 38.9949 39 33.1739 39 25.9929C39 18.8129 33.18 12.9939 26 12.9939ZM26 36.9949C19.935 36.9949 15 32.0589 15 25.9929C15 19.9289 19.935 14.9939 26 14.9939C32.065 14.9939 37 19.9289 37 25.9929C37 32.0599 32.065 36.9949 26 36.9949Z" fill="black"/>
        <path d="M26.993 0H24.993V10H26.993V0Z" fill="black"/>
        <path d="M26.993 42H24.993V52H26.993V42Z" fill="black"/>
        <path d="M9.993 25H0V27H9.993V25Z" fill="black"/>
        <path d="M52 25H41.993V27H52V25Z" fill="black"/>
        <path d="M45.08 8.31728L43.6658 6.90308L36.3056 14.2633L37.7198 15.6775L45.08 8.31728Z" fill="black"/>
        <path d="M6.89677 43.6734L8.31097 45.0876L15.6719 37.7267L14.2577 36.3125L6.89677 43.6734Z" fill="black"/>
        <path d="M15.6753 14.2687L8.31512 6.90845L6.90092 8.32265L14.2611 15.6829L15.6753 14.2687Z" fill="black"/>
        <path d="M36.3094 37.7277L43.6714 45.0886L45.0856 43.6742L37.7236 36.3133L36.3094 37.7277Z" fill="black"/>
        </svg>
        `
        ,
    },
    {
        title: "Barcelona",
        photo: "https://hotellacasadelsol-y66kjun72isdzyjss4l39vf.netdna-ssl.com/wp-content/uploads/2018/01/barcelona-cultura-historia.jpg",
        subText: "Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city. Museu Picasso and Fundació Joan Miró feature modern art by their namesakes.",
        buttonText1: "Secret Spots",
        buttonText2: "Beaches",
        weatherForecastText: "16° Thunderstorm",
        weatherForecastSvg: `<svg width="53" height="44" viewBox="0 0 53 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
        <path d="M43.628 13.029C42.032 5.584 35.421 0 27.501 0C21.078 0 15.524 3.678 12.799 9.035C12.533 9.017 12.269 8.995 11.999 8.995C5.372 8.995 0 14.367 0 20.995C0 27.602 5.34 32.96 11.938 32.993V32.996H13V30.996H12.396L11.949 30.993C6.463 30.966 2 26.48 2 20.995C2 15.481 6.485 10.995 11.999 10.995C12.174 10.995 12.346 11.009 12.519 11.02L12.667 11.03L13.983 11.118L14.581 9.942C17.073 5.043 22.024 2 27.501 2C34.291 2 40.251 6.814 41.673 13.448L41.99 14.93L43.504 15.025C47.707 15.287 51 18.788 51 22.996C51 27.393 47.435 30.973 43.043 30.996C42.993 30.993 42.95 30.991 42.906 30.989L42 30.996V32.996H42.863V32.989C42.909 32.99 42.954 32.996 43 32.996C48.521 32.996 53 28.519 53 22.996C53 17.686 48.855 13.354 43.628 13.029Z" fill="black"/>
        <path d="M14.0004 27.9887L20.4149 37.1487L22.0523 36.0021L15.6378 26.8421L14.0004 27.9887Z" fill="black"/>
        <path d="M31.9755 27.9884L38.3901 37.1484L40.0275 36.0018L33.6129 26.8418L31.9755 27.9884Z" fill="black"/>
        <path d="M28.842 36.0001H30.611H31.042H33.052L26.638 26.8391L25 27.9861L29.211 34.0001H27.44H25L26.271 35.8161L27.384 37.4051L32 44.0001L33.639 42.8541L29.022 36.2581L28.842 36.0001Z" fill="black"/>
        </g><defs><clipPath id="clip0"><rect width="53" height="44" fill="white"/></clipPath></defs>
        </svg>
        `,
    },
] // array af kortum

/** functions **/
var displayCards = function(cardsToDisplay){
    myDiv.innerHTML = ""; // Tæma það sem er í div

    for(var i = 0; i<cardsToDisplay.length;i++){
        var card = cardsToDisplay[i]
        displayCard(card)
    }
}

var displayCard = function(card){
    /** bæta við div-ið auka korti */
        myDiv.innerHTML += `
        <div class= "card" >
            <img src="${card.photo}" />
            <h1>${card.title}</h1>
            <p> ${card.subText}</p>
            <button>${card.buttonText1}</button>
            <button>${card.buttonText2}</button>
            <p><span class="forecast">${card.weatherForecastText}</span>${card.weatherForecastSvg}</p>
        </div>
        `   
}

/** Þegar kallað í þetta fall þá hreinsa úr öllum input fieldum */
var clearInputs = function() {
    headlineInput.value = ''
    pictureInput.value = ''
    textInput.value = ''
    button1Input.value = ''
    button2Input.value = ''
    weatherTextInput.value = ''
    weatherIconInput.value = ''
}

/** tekur  gildi úr svæðunum og bý til kort (ekki verið að birta það hér) */

// Ef fyllt er í öll svæðin þá skilar þetta fall true en annars setja missing stíl á input-ið
var validateCard = function() {
    var isValid = true
    
    // Skoða hvort búið sé að skrifa eitthvað í headlineInput
    if (headlineInput.value.length === 0) { 
        headlineInput.classList.add("missing")
        isValid = false
    } else {
        headlineInput.classList.remove("missing")
    }
    if (pictureInput.value.length === 0) { 
        pictureInput.classList.add("missing")
        isValid = false
    } else {
        pictureInput.classList.remove("missing")
    }
    if (textInput.value.length === 0) { 
        textInput.classList.add("missing")
        isValid = false
    } else {
        textInput.classList.remove("missing")
    }
    if (button1Input.value.length === 0) { 
        button1Input.classList.add("missing")
        isValid = false
    } else {
        button1Input.classList.remove("missing")
    }
    if (button2Input.value.length === 0) { 
        button2Input.classList.add("missing")
        isValid = false
    } else {
        button2Input.classList.remove("missing")
    }
    if (weatherTextInput.value.length === 0) { 
        weatherTextInput.classList.add("missing")
        isValid = false
    } else {
        weatherTextInput.classList.remove("missing")
    }
    if (weatherIconInput.value.length === 0) { 
        weatherIconInput.classList.add("missing")
        isValid = false
    } else {
        weatherIconInput.classList.remove("missing")
    }

    return isValid
}

var makeCard = function() {
    // Ef fyllt er í öll svæðin þá búa til kort en annars setja missing stíl á input-ið
    if (headlineInput.value.length === 0) { 
        headlineInput.classList.add("missing")
    } else {
        headlineInput.classList.remove("missing")
    }

    var card = {
        title: headlineInput.value,
        photo: pictureInput.value,
        subText: textInput.value,
        buttonText1: button1Input.value,
        buttonText2: button2Input.value,
        weatherForecastText: weatherTextInput.value,
        weatherForecastSvg: weatherIconInput.value,
    }
    return card
}

var onShowAddCardDivClick = function() {
    if (addCardDiv.style.display === "") {
        addCardDiv.style.display = "none"
        showAddCardDiv.innerHTML = "+"
    } else {
        addCardDiv.style.display = ""
        showAddCardDiv.innerHTML = "-"
    }
}

var onAddCardButtonClick = function() {
    var isValid = validateCard()

    if (isValid) { // Ef fyllt er út í alla reiti þá kemur true úr validateCard fallinu og þá ætla ég að búa til kort og teikna það
        var card = makeCard()  
        clearInputs() // Get hreinsað fieldin áður en kortið er birt því ekki lesið úr þeim þegar kortið er teiknað
        displayCard(card) // Birta öll kortin
        
        cards.push(card) // Bæta kortinu í arrayið af kortum til að teikna það ef valið er að teikna öll aftur
    }
}

var onRefreshCardsButtonClick = function() {
    displayAllCards()
}

var onClearInputsButtonClick = function() {
    clearInputs()
}

var onSearchInputInput = function() {
    var searchText = searchInput.value.toLowerCase()
    var cardsResult = []
    // Fara í gegnum kortin og setja í leitarniðurstöðu array þau sem passa
    for(i=0; i<cards.length; i++) {
        var card = cards[i]
        var cardTitle = card.title.toLowerCase()
        var buttonText1 = card.buttonText1.toLowerCase()
        var buttonText2 = card.buttonText2.toLowerCase()

        if (cardTitle.startsWith(searchText) 
            || buttonText1.includes(searchText)
            || buttonText2.includes(searchText)) {
            // Kort sem uppfyllir leit bætt við leitarniðurstöður
            cardsResult.push(card)
        }
    }

    // Birta leitarniðurstöður
    displayCards(cardsResult)
    
}
/** functions endar**/



/** Tengja að það sé kallað í addCard þegar smellt á addButtonCard hnappinn */
addCardButton.onclick = onAddCardButtonClick 
refreshCardsButton.onclick = onRefreshCardsButtonClick
clearInputsButton.onclick = onClearInputsButtonClick
searchInput.oninput = onSearchInputInput
showAddCardDiv.onclick = onShowAddCardDivClick

addCardDiv.style.display = "none"
displayCards(cards)


/*
Setti í cards array strax 10 gildi (card object)

Létu displayCards taka inn það array sem það á að birta
Þegar síðan er teiknuð í fyrsta skipti teikna cards sem eru skilgreind í byrjun
Þegar oninput í leitarbox þá er búið til nýtt array og öll kort í cards skoðuð
og athugað hvort þau eigi að vera hluti af leitarniðurstöðum.
Birti svo bara leitarniðurstöður með displayCards fallinu.

Breytti líka querySelector yfir í getElementById

Bætti við showAddCardDiv og addCardDiv utan um input til að geta falið og
birt að bæta við kortum.
*/


