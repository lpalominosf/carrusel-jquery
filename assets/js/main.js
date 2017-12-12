$(document).ready(function(){
		//Cuenta diapositivas, mostrando la cantidad de las imágenes
		var imgItems = $('.slider li').length;
		var imgPosition = 1;
		//Este for agrega circulos dependiendo de la cantidad de imagenes
		//Que se encuentren en las dispositivas
		for(i=1; i <= imgItems; i++){
			$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
		}

		
		//Ocultar slides
		$('.slider li').hide();
		//Mostrar primer slide
		$('.slider li:first').show();
		//Asignar un color a los circulos
		$('.pagination li:first').css({'color': '#cd6e2e'});

		//Al dar click se muestra el slide correspondiente
		$('.pagination li').click(pagination);
		//Siguiente imagen
		$('.right span').click(nextSlider);
		//Imagen anterior
		$('.left span').click(prevSlider);

		setInterval(function(){
			nextSlider();
		}, 4000);

		//funciones
		function pagination(){
			//Llama a la posicion de la paginacion a la que se le da click
			//+1 muestra la posición exacta, sin el 0
			var paginationPos = $(this).index() +1;

			//Esconde las imagenes
			$('.slider li').hide();
			// fadeIn=Efecto / paginationPos=numero de la posicion al que 
			// le hemos dado click
			$('.slider li:nth-child('+ paginationPos +')').fadeIn();

			$('.pagination li').css({'color': '#858585;'});
			//Al hacer click queda como seleccionado del color dado
			$(this).css({'color': '#cd6e2e'});

			imgPosition = paginationPos;
		}

		function nextSlider(){

			//Vuelve a número 1 la imagen seleccionada con la flecha derecha
			if(imgPosition >= imgItems){
				imgPosition = 1
			} else {
				imgPosition++;
			}

			$('.pagination li').css({'color': '#858585;'});
			$('.pagination li:nth-child('+ imgPosition +')').css({'color':'#cd6e2e'});
			
			//Esconde las imagenes
			$('.slider li').hide();
			// fadeIn=Efecto / paginationPos=numero de la posicion al que 
			// le hemos dado click
			$('.slider li:nth-child('+ imgPosition +')').fadeIn();

		}
		//Funcion que muestra la imagen previa
		function prevSlider(){

			//Vuelve a número 1 la imagen seleccionada con la flecha izquierda
			if(imgPosition <= 1){
				imgPosition = imgItems;
			} else {
				imgPosition--;
			}

			$('.pagination li').css({'color': '#858585;'});
			$('.pagination li:nth-child('+ imgPosition +')').css({'color':'#cd6e2e'});
			
			//Esconde las imagenes
			$('.slider li').hide();
			// fadeIn=Efecto / paginationPos=numero de la posicion al que 
			// le hemos dado click
			$('.slider li:nth-child('+ imgPosition +')').fadeIn();

		}


});