var recherche = $('input').val() ;

$.getJSON('https://api.unsplash.com/photos/random/?client_id=93c22e83081fbc7ed5997aab33520c8b3ed0e956d6398a933ba7356f63a8bf0d&query='+ recherche, function(data) {
 
    console.log(data);
    console.log(inputBG.value);
    
    var name = data.user.name;
    var bio = data.user.bio;
    var imageURL = data.urls.regular;
    
    // $('.name').text(name);
    // $('.bio').text(bio);
    // $('.image img').attr('src', imageURL);
    // $('.output').append( ' background=">' + imageURL +'">');

    var newStyles = document.createElement('style')
    document.head.append(newStyles)
    newStyles.innerHTML = '.my-element {' + 'background-image: url("' +
        imageURL + '")}' + 'background-size: cover;' + 'background: no-repeat;'
    

    });