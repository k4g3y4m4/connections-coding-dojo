let listeners = () => {
    let changeName = document.querySelector('.edit-profile');
    changeName.addEventListener('click', function() {
        let profile = document.querySelector('.information');
        profile.firstElementChild.innerHTML= "New Name"; 
    });

    let connectionsreduce = () => {
        let connectionsrequests = document.querySelector('#connectionrequest');
        let contrequest = connectionsrequests.innerHTML;
        contrequest = contrequest - 1;
        connectionsrequests.innerHTML = contrequest;
    }

    let connectionsadd = () => {
        let connections = document.querySelector('#connectionsocial');
        let contsocial = connections.innerHTML
        contsocial++;
        connections.innerHTML = contsocial;
    }

    let social = document.querySelectorAll('.icon-social');
    social.forEach(function(element) {
        element.addEventListener('click', function() {
            let userremove = element.parentNode.parentNode;

            if(element.className == "icon-social accept") {
                connectionsadd();
                connectionsreduce();                
            }else{
                connectionsreduce();
            }

            userremove.parentNode.removeChild(userremove);

        });
    });


}

listeners();