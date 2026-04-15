const hBtn = document.querySelectorAll(".hBtn");
const resNav = document.querySelector(".resNav")
const l1 = document.querySelector(".l1")
const l2 = document.querySelector(".l2")
const l3 = document.querySelector(".l3")

hBtn.forEach(element => {
    element.addEventListener("click", () => {

        resNav.classList.toggle("hide");

        l1.classList.toggle("rl1")
        l2.classList.toggle("rl2")
        l3.classList.toggle("rl3")

    })
});


// contact form
const suc = document.getElementById("statusSuc");
const fail = document.getElementById("statusFail");

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
        name: form.name.value,
        phone: form.phone.value,
        message: form.message.value
    };

    fetch("https://script.google.com/macros/s/AKfycbzp7RAXv1B33ROznzCdKsriLFAcfZK5NktVkPyBeaCseIIaBwi54-BhWn36DuCsj-0U1g/exec", {
        method: "POST",
        body: JSON.stringify(data)
    })

        .then(res => res.text())
        .then(data => {
            suc.classList.remove("hide");

            setTimeout(() => {
                suc.classList.add("hide");
            }, 5000); // 5000ms = 5 seconds

            form.reset();
        })
        .catch(err => {
            fail.classList.remove("hide");

            setTimeout(() => {
                fail.classList.add("hide");
            }, 5000);
        });
});