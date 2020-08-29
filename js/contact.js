function sendMessageToHost(email, body, subject) {
  Email.send({
    SecureToken: "93bf6ad4-701c-4a5e-831c-a08029a0ab80",
    To: "imh10052.18@bitmesra.ac.in",
    From: email,
    Subject: subject,
    Body: body,
  }).then(
    alert(`
        Your mail has been send successfully!!
        Thanks..
      `)
  );
}

$("#submit").click(function () {
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();

  if (name == "") {
    $("#name").css({ border: "2px solid #dd598c" });
    return;
  } else if (email == "") {
    $("#email").css({ border: "2px solid #dd598c" });
    return;
  } else if (message == "") {
    $("#message").css({ border: "2px solid #dd598c" });
    return;
  } else {
    let s = `
        <html>
             <h2>Message From IET website</h2>
          Name of the sender: ${name} <br/>
          Email id of the sender : ${email} <br/>
          Message : ${message}
        </html>
        `;

    sendMessageToHost(email, s, name);
    $("#contact-form").trigger("reset");
  }
});
