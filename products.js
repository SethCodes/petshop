


//display products
var products = [
    {
      title: 'Product One',
      image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwdG95fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: '$29.99'
    },
    {
      title: 'Product Two',
      image: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZyaXNiZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: '29.99',
    },
    {
      title: 'Product One',
      image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwdG95fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: '$29.99'
    },
    {
      title: 'Product Two',
      image: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZyaXNiZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: '29.99',
    },
    {
      title: 'Product One',
      image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwdG95fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: '$29.99'
    },
    {
      title: 'Product Two',
      image: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZyaXNiZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: '29.99',
    },
    {
      title: 'Product One',
      image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwdG95fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: '$29.99'
    },
    {
      title: 'Product Two',
      image: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZyaXNiZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: '29.99',
    },
    {
      title: 'Product Two',
      image: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZyaXNiZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: '29.99',
    }
    ]
    var postHTML = " ";

    for(let i = 0; i < products.length; i++){
        let div = '<div class="col-lg-4 col-md-6 col-sm-12 update-card sale-item-small"> <div class="card" style="width: 18rem;">';
        let image = '<img src="' + products[i].image + '" class="card-img-top" alt="product">';
        let cardBody = '<div class="card-body"><h5 class="card-title">' + products[i].title + '</h5><p class="card-text-price lead"><strike class="">$59.99</strike> ' + products[i].price + '</p></div></div></div>'
        let concatThis = div + image + cardBody;
        postHTML = postHTML + concatThis;

    }



    // for (var i=0; i < shop.length ; i++){
    //     var heading = '<div class="product ' + '"><span><h5>' + shop[i].title + '</h5>'
    //     var image = '<img src="' + shop[i].image + '"/'
    //     var price = '<p> ' + shop[i].price + '</p></span>'
    //     var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
    //     var concatThis = heading + image + price + description;
    //     postHTML = postHTML + concatThis
    // }
document.getElementById('market').innerHTML = postHTML;




