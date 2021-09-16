const form = document.getElementById("buyPIN");
if (form != null) {
    form.addEventListener("submit", buyPIN);
}

function buyPIN(e) {
    // prevent default form submition
    e.preventDefault();

    // set configurations
    FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-d815f55369b6636cb374bb2a733afbc7-X",
        tx_ref: "TRF_" + Math.floor((Math.random() * 100000003) + 3),
        amount: 200,
        currency: "NGN",
        // redirect_url: "http://localhost:7070",
        customer: {
            email: document.getElementById("email").value,
            phone_number: document.getElementById("regNumber").value,
            name: document.getElementById("fullName").value
        },
        callback: function(data) {
            console.log(data)
            window.location.replace("http://localhost:7070/paidPIN");

        },
        customizations: {
            'title': "The Rock Foundations School",
            'description': "Purchase of result PIN",
            'logo': "public/images/CidusfaceLogo.png"
        }
    });
}