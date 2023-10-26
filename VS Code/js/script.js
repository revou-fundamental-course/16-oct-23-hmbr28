
document.getElementById('btn-submit').addEventListener('click', function name() {
  const formInput = document.forms['message-form']

  const fullName = formInput['nama'].value
  const birth = formInput['tgl_lahir'].value
  const gender = formInput['gender'].value
  const message = formInput['pesan'].value

  console.log(fullName);

  if (fullName == "" || birth == "" || gender == "" || message == "") {
      alert('Form input tidak boleh ada yang kosong')
  } else {
      setSenderUI(fullName, birth, gender, message)
  }
})

function setSenderUI(fullName, birth, gender,message) {
  document.getElementById('sender-full-name').innerHTML = fullName
  document.getElementById('sender-birth-date').innerHTML = birth
  document.getElementById('sender-gender').innerHTML = gender
  document.getElementById('sender-messages').innerHTML = message
}
