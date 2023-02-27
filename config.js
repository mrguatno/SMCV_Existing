var config = {
    style: 'mapbox://styles/mapbox/streets-v12',
    accessToken: 'pk.eyJ1IjoibXJndWF0bm8iLCJhIjoiY2xlbGh2bW5vMHZrZDNxbjR2ajRxdnd3OCJ9.Aj5fI1VF5Adu1XJ51z9sOw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    use3dTerrain: true, //set true for enabling 3D maps.
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    footer: 'Step Up Consulting – Ideas that serve. Service that works. <br> Created using Mapbox Storytelling template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Existing Creative Villages in the Province of Bohol',
            image: 'https://github.com/mrguatno/SMCV_Existing/blob/main/images/Brown%20Indonesia%20Collage%20Photos.png?raw=true',
            description: '',
            location: {
                center: [124.1637, 9.9],
                zoom: 9.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ebcv-chapter',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: 'https://github.com/mrguatno/SMCV_Existing/blob/main/images/Existing%20Creative%20Villages/Enterprise-Based/ebcv2.png?raw=true',
            description: '',
            location: {
                center: [124.1637, 9.9],
                zoom: 9.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '1-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Baclayon Broa Making',
            image: 'https://github.com/mrguatno/SMCV_Existing/blob/main/images/Existing%20Creative%20Villages/Enterprise-Based/Baclayon%20Broa%20Making/Baclayon%20Broa%20Making.JPG?raw=true',
            description: '',
            location: {
                center: [123.91220, 9.62345],
                zoom: 17,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '2-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Albur Calamay Industry',
            image: 'https://github.com/mrguatno/SMCV_Existing/blob/main/images/Existing%20Creative%20Villages/Enterprise-Based/Albur/Albur%20Calamay%20Industry.JPEG?raw=true',
            description: '',
            location: {
                center: [123.95403, 9.61492],
                zoom: 17,
                pitch: 60,
                bearing: 43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '3-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Basacdacu Loom Weaving',
            image: '',
            description: '',
            location: {
                center: [123.95353, 9.64338],
                zoom: 17,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Asin Tibuok',
            image: 'https://github.com/mrguatno/SMCV_Existing/blob/main/images/Existing%20Creative%20Villages/Enterprise-Based/Albur/Albur%20Asin%20tibuok.jpeg?raw=true',
            description: '',
            location: {
                center: [123.96718, 9.60337],
                zoom: 17,
                pitch: 60,
                bearing: 43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Loay Ironsmith Workshop',
            image: 'https://github.com/mrguatno/SMCV_Existing/blob/main/images/Existing%20Creative%20Villages/Enterprise-Based/Loay%20Ironsmith%20Workshop/Loay%20Ironsmith%20Workshop.jpg?raw=true',
            description: '',
            location: {
                center: [124.00098, 9.60597],
                zoom: 17,
                pitch: 60,
                bearing: -180,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Sevilla Crunchy KabKab Industry Tour ',
            image: '',
            description: '',
            location: {
                center: [124.04737, 9.67507],
                zoom: 17,
                pitch: 60,
                bearing: 250
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Batuan Balay sa Humay ',
            image: 'https://github.com/mrguatno/SMCV_Existing/blob/main/images/Existing%20Creative%20Villages/Enterprise-Based/Batuan%20Balay%20sa%20Humay/Balay%20sa%20Humay.jpg?raw=true',
            description: '',
            location: {
                center: [124.14426, 9.77480],
                zoom: 17,
                pitch: 60,
                bearing: -10.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Antequera Farm and Crafts Village Tour',
            image: 'https://github.com/mrguatno/SMCV_Existing/blob/main/images/Existing%20Creative%20Villages/Enterprise-Based/Antequera%20Farm%20and%20Crafts%20Village%20Tour/Antequera%20Farm%20and%20Crafts%20Village%20Tour%202.jpg?raw=true',
            description: '',
            location: {
                center: [123.89830, 9.78066],
                zoom: 17,
                pitch: 60,
                bearing: 43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Cambuhat River and Oyster Farm',
            image: 'https://github.com/mrguatno/SMCV_Existing/blob/main/images/Existing%20Creative%20Villages/Enterprise-Based/Buenavista%20Cambuhat%20River%20and%20Oyster%20Farm/Buenavista%20Cambuhat%20River%20and%20Oyster%20Farm%203.jpg?raw=true',
            description: '',
            location: {
                center: [124.10022, 10.06198],
                zoom: 17,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '10-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Inabanga Bohol Beads and Fiber',
            image: 'https://github.com/mrguatno/SMCV_Existing/blob/main/images/Existing%20Creative%20Villages/Enterprise-Based/Inabanga%20Bohol%20Beads%20and%20Fiber/Bohol%20beads%20and%20fiber.jpg?raw=true',
            description: '',
            location: {
                center: [124.06701, 10.02954],
                zoom: 17,
                pitch: 60,
                bearing: 43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '11-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Tubigon Loom Weaving ',
            image: 'https://github.com/mrguatno/SMCV_Existing/blob/main/images/Existing%20Creative%20Villages/Enterprise-Based/Tubigon%20Loom%20Weaving/Tubigon%20Loom%20Weaving.jpg?raw=true',
            description: '',
            location: {
                center: [123.94875, 9.93587],
                zoom: 17,
                pitch: 60,
                bearing: -180,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '12-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Calape Takla and Mudcrab Culture Community',
            image: 'https://github.com/mrguatno/SMCV_Existing/blob/main/images/Existing%20Creative%20Villages/Enterprise-Based/Calape%20Takla%20and%20Mudrab%20Culture%20Community/Calape%20Takla%20and%20Mudcrab%201.jpg?raw=true',
            description: '',
            location: {
                center: [123.90643, 9.91921],
                zoom: 17,
                pitch: 60,
                bearing: 250
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '13-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Jagna Calamay Industry',
            image: 'https://github.com/mrguatno/SMCV_Existing/blob/main/images/Existing%20Creative%20Villages/Enterprise-Based/Jagna%20Calamay%20Industry/Jagna%20Calamay%20Industry%201.jpg?raw=true',
            description: '',
            location: {
                center: [124.36216, 9.64421],
                zoom: 17,
                pitch: 60,
                bearing: -10.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '14-identifier',
            alignment: 'left',
            hidden: false,
            title: 'MUSFA Bohol Organic and Strawberry Farm',
            image: 'https://github.com/mrguatno/SMCV_Existing/blob/main/images/Existing%20Creative%20Villages/Enterprise-Based/Jagna%20Calamay%20Industry/Jagna%20Mayana%202.JPEG?raw=true',
            description: '',
            location: {
                center: [124.33180, 9.74064],
                zoom: 17,
                pitch: 60,
                bearing: 250
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'additional-chapter',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: 'https://drive.google.com/uc?export=view&id=1BIXydAKKNOGi396iDUN-l69Z4Q9bcUMz',
            description: '',
            location: {
                center: [124.1637, 9.9],
                zoom: 9.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eight-identifier',
            alignment: 'right',
            hidden: false,
            title: 'The Abatan Community',
            image: 'https://drive.google.com/uc?export=view&id=1jgHpZE4LYlPdsMtR7cKkdkVd0CTVQb82',
            description: 'Board a local banca boat to visit the five ancient communities who live along the Abatan river in Bohol.During the tour, you’ll also get to see the local nipa weaving, which is used to make roofing in the villages. Further upstream is another community whose livelihood is bamboo furniture making and basket weaving. You’ll even get a chance to try traditional weaving with help from the skilled women in the village. The real highlight though is the cultural performance, where locals from the different communities tell their story through dance, depicting their daily routines and traditions.',
            location: {
                center: [123.87380, 9.72568],
                zoom: 14,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ninth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Cambuhat Oyster Farm',
            image: 'https://drive.google.com/uc?export=view&id=1iocBzPerFNxDCWk8DX7cUB4ar87vpMQq',
            description: 'The Cambuhat Oyster farm is situated in the municipality of Buenavista, Bohol. It is part of an eco-friendly tourism enterprise by the Cambuhat Enterprise Development & Fisheries Association (CEDFA). Tourists get to see how Oysters are planted and harvested and also learn about Mangroves’preservation in this tour.',
            location: {
                center: [124.10014, 10.06201],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: true,
            title: 'The Creative Village',
            location: {
                center: [124.1637, 9.9],
                zoom: 9.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
    ]
};