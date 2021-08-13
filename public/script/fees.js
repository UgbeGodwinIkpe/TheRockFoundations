// Flutterwave payment gateway
const form = document.getElementById("fees");
if (form != null) {
    form.addEventListener("submit", payFee);
}

function payFee(e) {
    // prevent default form submition
    e.preventDefault();

    // set configurations
    FlutterwaveCheckout({
        public_key: "FLWPUBK-ea911ad04be9e1019db650231994ec1c-X",
        tx_ref: "TRF_" + Math.floor((Math.random() * 10000000) + 31),
        amount: document.getElementById("amount").value,
        currency: "NGN",
        customer: {
            email: document.getElementById("email").value,
            phone_number: document.getElementById("regNumber").value,
            name: document.getElementById("fullName").value
        },
        callback: function(data) {
            console.log(data);
            const reference = data.tx_ref;
            const transaction_id = data.transaction_id;
            alert("Payment was successfully completed, your payment Ref Number is: " + reference + ". And your transaction Id is: " + transaction_id + ". A receiptfor your payment has been sent to your " + email);
        },
        customizations: {
            'title': "The Rock Foundations School",
            'description': "School Fee Payment",
            'logo': "public/images/CidusfaceLogo.png"
        }
    });
}

// A function to determined school fee amount base on selected class
const stuClass = document.getElementById("class");
const stuFeeAmount = document.getElementById('amount');
const term = document.getElementById('term');

function feeAmount() {
    if ((stuClass.value === 'JSS 1') && (term.value === 'First term')) {
        stuFeeAmount.value = '125000';
    } else {
        if (stuClass.value === 'JSS 1') {
            stuFeeAmount.value = '105000';
        }
    }
    if (stuClass.value === 'JSS 2') {
        stuFeeAmount.value = '105000';
    }
    if ((stuClass.value === 'JSS 3') && (term.value !== 'Third term')) {
        stuFeeAmount.value = '105000';
    } else {
        if ((stuClass.value === 'JSS 3') && (term.value === 'Third term')) {
            stuFeeAmount.value = '160000';
        }
    }
    if ((stuClass.value === 'SSS 1') && (term.value === 'First term')) {
        stuFeeAmount.value = '125000';
    } else {
        if (stuClass.value === 'SSS 1') {
            stuFeeAmount.value = '105000';
        }
    }
    if ((stuClass.value === 'SSS 2') && (term.value !== 'Third term')) {
        stuFeeAmount.value = '105000';
    } else {
        if ((stuClass.value === 'SSS 2') && (term.value === 'Third term')) {
            stuFeeAmount.value = '160800';
        }
    }
    if ((stuClass.value === 'SSS 3') && (term.value !== 'Third term')) {
        stuFeeAmount.value = '138500';
    } else {
        if ((stuClass.value === 'SSS 3') && (term.value === 'Third term')) {
            stuFeeAmount.value = '209000';
        }
    }
}