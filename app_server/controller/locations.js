/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'BLOSSOM-perfect place for decor',
        pageHeader: {
            title: 'BLOSSOM',
            strapline: 'Live Life In Full Bloom'
        },
        sidebar: "Looking for decors? Blossom will helps you find things to garnish your place. Perhaps with room decors,wall paintings...? Let Blossom help you find the place you're looking for.",
        locations: [{
            name: 'Dream Home Interiors',
            address: 'ECIL,A. S. Rao Nagar, Hyderabad',
            rating: 4,
            facilities: ['Home Decoration Service','Interior Designers','Custom Framing'],
            distance: '15.3 km from secundrabad',
            href: '/location'
        }, {
            name: 'Archway Interiors',
            address: 'Mehdipatnam, Hyderabad',
            rating: 4,
            facilities: [' Exclusive mirror works','Glass works' ,'Professional designers'],
            distance: '8 km from Secunderabad',
            href: '/location/2'
        }, {
            name: 'Designers Lounge',
            address: 'House 418,Kavadiguda, Hyderabad',
            rating: 2,
            facilities: [' 3D Interior designs', 'wall arts','Furniture Designs'],
            distance: '3Km from Secunderabad ',
            href: '/location/3'
        }]
    });
  };
  
  /* GET 'Location info' page */
  module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Dream Home Interiors',
        pageHeader: {
            title: 'Dream Home Interiors'
        },
        sidebar: {
            context: 'is on Blossom because it has accessible interior designs,profressional designers,best quality products...',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Dream Home Interiors',
            address: 'ECIL,A. S. Rao Nagar, Hyderabad',
            rating: 4,
            facilities: ['Home Decoration Service','Interior Designers','Custom Framing'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '10:00am',
                closing: '8:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '10:00am',
                closing: '4:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'RaHaSri',
                rating: 5,
                timestamp: '24 July 2023',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Arom',
                rating: 3,
                timestamp: '18 Aug 2023',
                reviewText: 'It was okay. designs wasn\'t great, but the facilities was great .'
            }]
        }
    });
  };

    /* GET 'Location info' page */
    module.exports.locationInfo2 = function(req, res) {
        res.render('location-info2', {
            title: 'Archway Interiors',
            pageHeader: {
                title: 'Archway Interiors'
            },
            sidebar: {
                context: 'is on Blossom because it has accessible interior designs,profressional designers,best quality products...',
                callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
            },
            location: {
                name: 'Archway Interiors',
                address: 'Mehdipatnam, Hyderabad',
                rating: 3,
                facilities: ['Exclusive mirror works','Glass works', 'Professional designers'],
                coords: {
                    lat: 51.455041,
                    lng: -0.9690884
                },
                openingTimes: [{
                    days: 'Monday - Friday',
                    opening: '10:00am',
                    closing: '8:00pm',
                    closed: false
                }, {
                    days: 'Saturday',
                    opening: '11:00am',
                    closing: '4:00pm',
                    closed: false
                }, {
                    days: 'Sunday',
                    closed: true
                }],
                reviews: [{
                    author: 'Sweety',
                    rating: 5,
                    timestamp: '16 Jan 2022',
                    reviewText: 'What a great place. I can\'t say enough good things about it.'
                }, {
                    author: 'Ash',
                    rating: 3,
                    timestamp: '10 march 2021',
                    reviewText: 'It was okay. facilities  wasn\'t great, but the designers are professional.'
                }]
            }
        });
      };

        /* GET 'Location info' page */
  module.exports.locationInfo3 = function(req, res) {
    res.render('location-info3', {
        title: 'Designers Lounge',
        pageHeader: {
            title: 'Designers Lounge'
        },
        sidebar: {
            context: 'is on Blossom because it has accessible interior designs,profressional designers,best quality products... ',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Designers Lounge',
            address: 'House 418,Kavadiguda, Hyderabad',
            rating: 3,
            facilities: ['3D Interior designs', 'wall arts','Furniture Designs'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '10:00am',
                closing: '8:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '11:00am',
                closing: '4:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Sam',
                rating: 5,
                timestamp: '3 april 2012',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Chashma',
                rating: 3,
                timestamp: '7 oct 2011',
                reviewText: 'It was great.everything is perfect.'
            }]
        }
    });
  };

  /* GET 'Add review' page */
  module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Dream Home Interiors on Blossom',
        pageHeader: {
            title: 'Review Dream Home Interiors'
        }
    });
  };
  
  /* GET 'Add review' page */
  module.exports.addReview2 = function(req, res) {
    res.render('location-review-form2', {
        title: 'Review Archway Interiors on Blossom',
        pageHeader: {
            title: 'Review Archway Interiors'
        }
    });
  };

  /* GET 'Add review' page */
  module.exports.addReview3 = function(req, res) {
    res.render('location-review-form3', {
        title: 'Review Designers Lounge on Blossom',
        pageHeader: {
            title: 'Review Designers Lounge'
        }
    });
  };