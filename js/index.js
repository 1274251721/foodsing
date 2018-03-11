$(document).ready(function() {
	$('.headdiv').hover(function() {
		$('#headnext').stop(true, true).slideDown();
	}, function() {
		$('#headnext').stop(false, true).slideUp();
	});
	$('.shouye').mousemove(function() {
		$('#headnext').slideUp();
	});
	$('.nexta').mousemove(function() {
		$('#headnext').slideDown(); 
	});
	$('#headnext').mousemove(function() {
		$('#headnext').stop(false, false).show();
	});
	$('#headnext').mouseout(function() {
		$('#headnext').stop(false, true).slideUp();
	});
	$('#head_li1').mousemove(function() {
		$('#headhover1').slideDown();
	});
	$('#head_li2').mousemove(function() {
		$('#headhover1').slideUp();
		$('#headhover2').slideDown();
		$('#headhover3').slideUp();
		$('#headhover4').hide();
		$('#headhover5').hide();
		$('#headhover6').hide();
		$('#headhover7').hide();
	});
	$('#head_li3').mousemove(function() {
		$('#headhover2').slideUp();
		$('#headhover3').slideDown();
		$('#headhover4').slideUp();
		$('#headhover1').hide();
		$('#headhover5').hide();
		$('#headhover6').hide();
		$('#headhover7').hide();
	});
	$('#head_li4').mousemove(function() {
		$('#headhover3').slideUp();
		$('#headhover4').slideDown();
		$('#headhover5').slideUp();
		$('#headhover1').hide();
		$('#headhover2').hide();
		$('#headhover6').hide();
		$('#headhover7').hide();
	});
	$('#head_li5').mousemove(function() {
		$('#headhover4').slideUp();
		$('#headhover5').slideDown();
		$('#headhover6').slideUp();
		$('#headhover1').hide();
		$('#headhover2').hide();
		$('#headhover3').hide();
		$('#headhover7').hide();
	});
	$('#head_li6').mousemove(function() {
		$('#headhover5').slideUp();
		$('#headhover6').slideDown();
		$('#headhover7').slideUp();
		$('#headhover1').hide();
		$('#headhover2').hide();
		$('#headhover3').hide();
		$('#headhover4').hide();
	});
	$('#head_li7').mousemove(function() {
		$('#headhover6').slideUp();
		$('#headhover7').slideDown();
		$('#headhover1').slideUp();
		$('#headhover2').hide();
		$('#headhover3').hide();
		$('#headhover4').hide();
		$('#headhover5').hide();
	});

	$('#a_list_div1').hover(function() {
		$('#a_list_div1 #alist_div_con').css('width', '100%');
	$('#a_list_div1 #a_list_div_a').css('width', '100%');
	}, function() {
		$('#a_list_div1 #a_list_div_a').css('width', '30%');
		$('#a_list_div1 #alist_div_con').css('width', '20%');
	});
	$('#a_list_div2').hover(function(){
		$('#a_list_div2 #alist_div_con h4').css('width', '100%');
	$('#a_list_div2 #alist_div_con').css('width', '100%');
	}, function() {
		$('#a_list_div2 #alist_div_con h4').css('width', '30%');
		$('#a_list_div2 #alist_div_con').css('width', '20%');
	});
	$('#a_list_div3').hover(function() {
		$('#a_list_div3 #alist_div_con h4').css('width', '100%');
		$('#a_list_div3 #alist_div_con').css('width', '100%');
	}, function() {
		$('#a_list_div3 #alist_div_con h4').css('width', '30%');
		$('#a_list_div3 #alist_div_con').css('width', '20%');
	});
	$(document).scroll(function() {
		if($(this).scrollTop() >= 763) {
			$('#allbanner').css('z-index','2');
			$('#allbg2').css('z-index','1');
			$('#allbg1').css('z-index','3');
		}else{
			$('#allbanner').css('z-index','3');
			$('#allbg1').css('z-index','2');
			$('#allbg2').css('z-index','1');
		};
		if($(this).scrollTop() >= 2200){
			$('#allbanner').css('z-index','1');
			$('#allbg1').css('z-index','2');
			$('#allbg2').css('z-index','3');
		} ;
		
	});
	

})