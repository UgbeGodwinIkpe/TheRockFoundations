// Flutterwave payment gateway
const form = document.getElementById("entranceExamFeeForm");
if (form != null) {
    form.addEventListener("submit", payNow);
}

function payNow(e) {
    console.log('I can reach here...');
    // prevent default form submition
    e.preventDefault();

    // set configurations
    FlutterwaveCheckout({
        public_key: "FLWPUBK-ea911ad04be9e1019db650231994ec1c-X",
        tx_ref: "TRF_" + Math.floor((Math.random() * 1000000000) + 1),
        amount: 50,
        currency: "NGN",
        customer: {
            email: document.getElementById("parentEmail").value,
            phone_number: document.getElementById("parentPhoneNumber").value,
            name: document.getElementById("fullName").value
        },
        callback: function(data) {
            console.log(data);
            const reference = data.tx_ref;
            const transaction_id = data.transaction_id;
            alert("Payment was successfully completed, your REG. Number is: " + reference + ". And your transaction Id is: " + transaction_id + ". A receiptfor your payment has been sent to your email.");
        },
        customizations: {
            'title': "The Rock Foundations School",
            'description': "Entrance Exam Fee",
            'logo': "public/images/CidusfaceLogo.png"
        }
    });
}