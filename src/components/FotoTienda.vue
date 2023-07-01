<template>
    <div class="secciones">
		<div class="seccion" id="1">
			<div class="card">
				<h1>UDALEKUS</h1>
				<!-- <router-link to ='/UdalekusView'><img src="../assets/imgHome/udalekus.jpg" alt="udalekus"></router-link> -->
			</div>
			<div>			
				<a href="/UdalekusView" >
					<img  @click="bajar" src="../assets/imgHome/udalekus.jpg" alt="Foto" />
				</a>
			</div>
		</div>

		<div class="seccion" id="2">
			<div class="card">
				<h1>CURSOS</h1>
				<!-- <router-link to ='/CursosView'><img src="../assets/imgHome/cursosHome.jpeg" alt="blog"></router-link> -->
			</div>
			<div>			
				<a href="/CursosView" >
					<img  @click="bajar" src="../assets/imgHome/cursosHome.jpeg" alt="Foto" />
				</a>
			</div>
		</div>

		<div class="seccion" id="3">
			<div class="card">
				<h1>BLOG</h1>
				<!-- <router-link to ='/BlogView'><img src="../assets/imgHome/blogNew.jpg" alt="blog"></router-link> -->
			</div>
			<div>			
				<a href="/BlogView" >
					<img  @click="bajar" src="../assets/imgHome/blogNew.jpg" alt="Foto" />
				</a>
			</div>
		</div>

		<div class="seccion" id="4">
			<div class="card">
				<h1>INFORMACION</h1>
				<!-- <router-link to ='/InformacionView'><img src="../assets/imgHome/infoBakio.png" alt="info"></router-link> -->
			</div>
			<div>			
				<a href="/InformacionView" >
					<img  @click="bajar" src="../assets/imgHome/infoBakio.png" alt="Foto" />
				</a>
			</div>
		</div>
		
	</div>
    
</template>
<script>
function bajar(){
    window.scrollTo ({
        top:600,
        behavior:'smooth'
    })
}
</script>

<style>

html {
	scroll-behavior: smooth;
}
@font-face {
  font-family: 'Original Surfer';
  src: url('../assets/original-surfer/OriginalSurfer-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: "Original Surfer";
	
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
	border-left: solid 5px rgba(0, 0, 0, 0.287);
    padding-left: 0.5rem;
	width: 13rem
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