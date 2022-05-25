document.addEventListener('DOMContentLoaded',function(){
	//khai bao mot so doi tuong can su dung
	var nut = document.querySelectorAll('.chuyenslide ul li');
	var slides = document.querySelectorAll('.cacslide ul li');
	var thoigian = setInterval(() => {aubtoSlide()}, 5000);
	//nut trả về một mảng
	for (var i = 0; i < nut.length; i++) {
		nut[i].addEventListener('click',function(){
			clearInterval(thoigian);
			//trước đó phải bỏ tất cả màu đen đi
			for (var i = 0; i < nut.length; i++) {
				nut[i].classList.remove('kichhoat');

			}
			this.classList.add('kichhoat');
			//xu ly tinh vi tri
			var nutkichhoat = this;
			var vitrinut = 0;
			for ( vitrinut = 0; nutkichhoat = nutkichhoat.previousElementSibling; vitrinut++) {
				
			}
			//bước 1 khi click thì cho tất cả slide ẩn đi = cách remove
			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('active');
				slides[vitrinut].classList.add('active');
			}
		})
	}//hết sự kiện cho nút chuyển slide
	//bắt đầu sự kiện set thời gian tự động chuyển slide
	aubtoSlide();
	//viết hàm tự chuyền slide
	function aubtoSlide(){
		//b1: tính xem slide nào đang hiển thị
	  	var vitrihienthi = 0;
	  	var slideHienTai = document.querySelector('.cacslide ul li.active');
	  	for (vitrihienthi = 0; slideHienTai = slideHienTai.previousElementSibling; vitrihienthi++) {
	  	}
	  	//cho phần tử tiếp theo của slide hiển thị ra
	  	if(vitrihienthi < (slides.length-1)){
	  		for (var i = 0; i < slides.length; i++) {
	  			slides[i].classList.remove('active'); 
	  			nut[i].classList.remove('kichhoat');
	  		//cho phần tử tiếp theo của slide hiện ra
	  		slides[vitrihienthi].nextElementSibling.classList.add('active');
	  		nut[vitrihienthi].nextElementSibling.classList.add('kichhoat');
	  	}
	  }
	  else {
	  	for (var i = 0; i < slides.length; i++) {
	  		slides[i].classList.remove('active');
	  		nut[i].classList.remove('kichhoat');
	  		//cho phần tử tiếp theo của slide hiện ra
	  		slides[0].classList.add('active');
	  		nut[0].classList.add('kichhoat');
	  	}
	  }
	}
},false)