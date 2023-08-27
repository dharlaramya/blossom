/* GET 'about us' page */
module.exports.about = function(req, res) {
    res.render('generic-text', {
        title: 'About Blossom',
        content: 'Blossom was created to Elevate the space,Enrich the life of the people Our philosophy centers on the belief that interior decor is an art form that goes beyond aesthetics.Its about creating an immersive experience that resonates with you on a profound level.We approach each project as a blank canvas, working collaboratively with our clients to understand their lifestyles, preferences, and aspirations. This client-centric approach allows us to craft spaces that are not only visually stunning but also functional and deeply meaningful'
    });
  };
