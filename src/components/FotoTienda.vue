<template>
    <div class="secciones">
		<div class="seccion" id="1">
			<div class="card">
				<h1>UDALEKUS</h1>
				<img src="../assets/imgHome/udalekus.jpg" alt="udalekus">
			</div>
		</div>

		<div class="seccion" id="2">
			<div class="card">
				<h1>CURSOS</h1>
				<img src="../assets/imgHome/cursosHome.jpeg" alt="blog">
			</div>
		</div>

		<div class="seccion" id="3">
			<div class="card">
				<h1>BLOG</h1>
				<img src="../assets/imgHome/blogNew.jpg" alt="blog">
			</div>
		</div>

		<div class="seccion" id="4">
			<div class="card">
				<h1>INFORMACION</h1>
				<img src="../assets/imgHome/infoBakio.png" alt="info">
			</div>
		</div>
		
	</div>
    
</template>

<style>

html {
	scroll-behavior: smooth;
}

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

body {
	background: #f2f2f2;
	font-family: 'Roboto', sans-serif;
}

a {
	text-decoration: none;
}

 /* .secciones{
    display: grid;
    grid-template-columns: 1fr 1fr;
}  */


.seccion {	
	max-width: 800px;
	width: 90%;
	margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;	
	display: flex;
	flex-direction: column;	
	justify-content: center;

}

.seccion .card {
	background: #fff;
	height: 90%;
	padding: 1rem;
	border-radius: 5px;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    

}

.seccion h1 {
	/* font-size: 48px; */
	margin-bottom: 2rem;
}

.seccion p {
	line-height: 38px;
	margin-bottom: 40px;
	color: #494949;
	font-size: 20px;
	border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
}

.seccion img {
	width: 50%;
	vertical-align: top;
	
}



@media screen and (max-width: 800px) {
	nav a {
		font-size: 14px;
		padding: 5px;
	}
}

@media screen and (max-width: 450px) {
	nav a {
		font-size: 12px;
	}
}
</style>