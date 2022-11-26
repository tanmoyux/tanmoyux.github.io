let alertcopy=document.getElementById("alertcopy")

function CopyToClipboard(id)
		{
		let r = document.createRange();
		r.selectNode(document.getElementById(id));
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(r);
		document.execCommand('copy');
		window.getSelection().removeAllRanges();
		Swal.fire({
			title: 'Copied to Clipboard.',
			timer: 800,
			width: '16rem',
			position: 'top-start',
			showConfirmButton: false,
			allowOutsideClick: true,
			color: '#ffffff',
			background: '#DF005E',
			})
		}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
	  var dropdowns = document.getElementsByClassName("dropdown-content");
	  var i;
	  for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
		  openDropdown.classList.remove('show');
		}
	  }
	}
  }

 /*MOBILE MESSAGE*/ 
  setTimeout(() => {
	const disappear = document.getElementById('disappear');
  
	// 👇️ removes element from DOM
	disappear.style.display = 'none';
  
	// 👇️ hides element (still takes up space on page)
	// box.style.visibility = 'hidden';
  }, 2500); // 👈️ time in milliseconds