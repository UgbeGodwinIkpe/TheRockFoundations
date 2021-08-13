$('#formRequest').on('submit', (e) => {
    //     e.preventDefault();

    const name = $('#name').val();
    const email = $('#email').val();
    const subject = $('#subject').val();
    const text = $('#text').val();

    const data = {
        name,
        email,
        subject,
        text
    };
    console.log("I can reach here... from form request")
    $.post('/email', data, function() {
        console.log(name + ' your admission form request has been received');
    });
});

// Contact form function
$('#contactForm').on('submit', (e) => {
    //     e.preventDefault();

    const name = $('#name1').val();
    const email = $('#email1').val();
    const subject = ('TRF: ' + name);
    const text = $('#text1').val();

    const data = {
        name,
        email,
        subject,
        text
    };
    console.log("I can reach here...")
    $.post('/contactForm', data, function() {
        console.log(name + ' your message has been received by The Rock Foundations');
    });
});