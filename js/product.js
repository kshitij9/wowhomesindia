$(function () {

    $('.toast').toast('show');

    $('.nav-item.dropdown').mouseenter(function () {
        $(this).addClass('show');
        $(this).children('.dropdown-menu').addClass('show');
        $(this).children('.dropdown-toggle').attr('aria-expanded', 'true');
    }).mouseleave(function () {
        $(this).removeClass('show');
        $(this).children('.dropdown-menu').removeClass('show');
        $(this).children('.dropdown-toggle').attr('aria-expanded', 'false');
    });

    $('.img-small').on('mouseenter click', function () {
        var src = $(this).data('src');
        $('.img-large').css("background-image", "url('" + src + "')");
    });

    var imgLarge = $('.img-large');

    imgLarge.mousemove(function (event) {
        var relX = event.pageX - $(this).offset().left;
        var relY = event.pageY - $(this).offset().top;
        var width = $(this).width();
        var height = $(this).height();
        var x = (relX / width) * 100;
        var y = (relY / height) * 100;
        $(this).css("background-position", x + "% " + y + "%");
    });

    imgLarge.mouseout(function () {
        $(this).css("background-position", "center");
    });

    $(window).resize(function () {
        setImgLarge();
        setImgSmall();
    });

    setImgLarge();
    setImgSmall();

});

function setImgLarge() {
    var imgLarge = $('.img-large');
    var width = imgLarge.width();
    imgLarge.height(width);
}

function setImgSmall() {
    var imgSmall = $('.img-small');
    var width = imgSmall.width();
    imgSmall.height(width * 4 / 3);
}

const products = [
    {
        "product_name": "Lifto Dry Luxury (6 Feet- 6 Pipes)",
        "product_description": "<strong>Pipe Length</strong> ‏ : ‎<strong>6 feet</strong><br><strong>Manufacturer</strong> ‏ : ‎ WOW HOMES<br><strong>Item model number</strong> ‏ : ‎ Lifto Dry Luxury<br><strong>Made In</strong> ‏ : ‎ India<br><strong>Manufacturer</strong> ‏ : ‎ WOW HOMES<br><strong>Included Components</strong> ‏ : ‎ 6 Stainless Steel Pipes of 6 FEET | 2 Pcs Metal Ceiling Pulley bracket| 1Metal Wall Hook | 6 UV resistant Nylon Ropes | 12 Pipe End Caps ( +1 extra) | 12 Rope Stopper Caps (+4extra) | 1 Set Screw for Ceiling | 1 Set Screw for Wall Hook | 1 Fitting Instruction Manual",
        "image_urls": [
            "img/products/6-pipes/6.jpg",
            "img/products/02.jpg",
            "img/products/03.jpg",
            "img/products/04.jpg"
        ]
    },
    {
        "product_name": "Lifto Dry Luxury (4 Feet- 6 Pipes)",
        "product_description": "<strong>Pipe Length</strong> ‏ : ‎<strong>4 feet</strong><br><strong>Manufacturer</strong> ‏ : ‎ WOW HOMES<br><strong>Item model number</strong> ‏ : ‎ Lifto Dry Luxury<br><strong>Made In</strong> ‏ : ‎ India<br><strong>Manufacturer</strong> ‏ : ‎ WOW HOMES<br>Included Components</strong> ‏ : ‎ 6 Stainless Steel Pipes of 4 FEET | 2 Pcs Metal Ceiling Pulley bracket| 1Metal Wall Hook | 6 UV resistant Nylon Ropes | 12 Pipe End Caps ( +1 extra) | 12 Rope Stopper Caps (+4extra) | 1 Set Screw for Ceiling | 1 Set Screw for Wall Hook | 1 Fitting Instruction Manual",
        "image_urls": [
            "img/products/6-pipes/4.jpg",
            "img/products/02.jpg",
            "img/products/03.jpg",
            "img/products/04.jpg"
        ]
    },
    {
        "product_name": "Lifto Dry Luxury (3 Feet- 6 Pipes)",
        "product_description": "<strong>Pipe Length</strong> ‏ : ‎<strong>3 feet</strong><br><strong>Manufacturer</strong> ‏ : ‎ WOW HOMES<br><strong>Item model number</strong> ‏ : ‎ Lifto Dry Luxury<br><strong>Made In</strong> ‏ : ‎ India<br><strong>Manufacturer</strong> ‏ : ‎ WOW HOMES<br><strong>Included Components</strong> ‏ : ‎ 6 Stainless Steel Pipes of 3 FEET | 2 Pcs Metal Ceiling Pulley bracket| 1Metal Wall Hook | 6 UV resistant Nylon Ropes | 12 Pipe End Caps ( +1 extra) | 12 Rope Stopper Caps (+4extra) | 1 Set Screw for Ceiling | 1 Set Screw for Wall Hook | 1 Fitting Instruction Manual",
        "image_urls": [
            "img/products/6-pipes/3.jpg",
            "img/products/02.jpg",
            "img/products/03.jpg",
            "img/products/04.jpg"
        ]
    }
];

const initProductData = () => {
    const productName = document.querySelector('#productName');
    const productPrice = document.querySelector('#productPrice');
    const productDimensions = document.querySelector('#dimensions');
    const selectedProductId = sessionStorage.getItem('selectedProduct');
    
    const largeImage = document.querySelector('.img-large');
    const smallImages = document.querySelectorAll('.img-small');
    
    //Initializing product data
    const productSpecs = products[selectedProductId];
    productName.innerText = productSpecs.product_name;
    if(productSpecs.price) {
        productPrice.innerText = productSpecs.price;
    }
    productDimensions.innerHTML = productSpecs.product_description;

    //Initializing product images
    largeImage.setAttribute("style", `background-image: url('${productSpecs.image_urls[0]}')`);
    for(let i = 1; i < productSpecs.image_urls.length; i++) {
        smallImages[i-1].setAttribute("style", `background-image: url('${productSpecs.image_urls[i]}')`);
        smallImages[i-1].setAttribute("data-src", `${productSpecs.image_urls[i-1]}`);
    }
    setImgLarge();
    setImgSmall();
}



function selectedVariantChanged () {
    const selectedVariant = document.getElementById('selectVariant');
    if(selectedVariant.value) {
        sessionStorage.setItem('selectedProduct', selectedVariant.value);
        initProductData();
    }
}

initProductData();