import React, { useState } from "react";
import sapatoFeminino from "../../assets/women-s-beige-low-heel-shoes-fashion.jpg";
import sandaliaFeminina from "../../assets/simple-white-sandals-summer-footwear-fashion (1).jpg";
import tenisUnisex from "../../assets/white-trainer-sneakers-unisex-footwear-fashion.jpg";
import logo from "../../assets/logo-site.png";

export default function Home() {
    const [ nome, setNome ] = useState('')
    const [ email, setEmail ] = useState('')

	function handle() {
        const emailESenha = JSON.stringify({
            nome: nome,
            email: email
        })

        localStorage.setItem('nomeEEmail', emailESenha)
        window.alert('E-mail cadastrado com êxito!')
    }

	return (
		<>
			<div>
				<nav
					style={{
						backgroundColor: "#A0E4DC",
						height: "100px",
						color: "#fff",
						display: "flex",
						alignItems: "center",
					}}
				>
					<div style={{ marginLeft: "350px" }}>
						<img
							src={logo}
							alt="Avatar"
							style={{ width: "150px", height: "150px", borderRadius: "15px 50px 0px 0px" }}
						/>
					</div>
				</nav>
				<div style={{ display: "flex", margin: "10px 200px 0px" }}>
					<h1>Aqui estão algumas de nossas principais ofertas</h1>
				</div>

				<div style={{ display: "flex", margin: "25px 200px", justifyContent: "space-around", color: "white" }}>
					<div style={{ width: "300px", height: "500px" }}>
						{/* <a href='https://br.freepik.com/fotos/verao'>Verão foto criado por rawpixel.com - br.freepik.com</a> */}
						<div class="card">
							<img
								src={sandaliaFeminina}
								alt="Avatar"
								style={{ width: "100%", height: "70%", borderRadius: "15px 50px 0px 0px" }}
							/>
							<div class="container">
								<h4>
									<b>Sandália feminina</b>
								</h4>
								<p style={{ fontSize: "10pt", textDecoration: "line-through", color: "lightgray" }}>
									R$ 79,90
								</p>
								<p style={{ fontSize: "20pt" }}>
									<strong>R$ 49,90</strong>
								</p>
							</div>
						</div>
					</div>
					<div style={{ width: "300px", height: "500px" }}>
						{/* <a href='https://br.freepik.com/fotos/foto'>Foto foto criado por rawpixel.com - br.freepik.com</a> */}
						<div class="card">
							<img
								src={sapatoFeminino}
								alt="Avatar"
								style={{ width: "100%", height: "70%", borderRadius: "15px 50px 0px 0px" }}
							/>
							<div class="container">
								<h4>
									<b>Sapato feminino</b>
								</h4>
								<p style={{ fontSize: "10pt", textDecoration: "line-through", color: "lightgray" }}>
									R$ 150,00
								</p>
								<p style={{ fontSize: "20pt" }}>
									<strong>R$ 99,90</strong>
								</p>
							</div>
						</div>
					</div>
					<div style={{ width: "300px", height: "500px" }}>
						{/* <a href='https://br.freepik.com/fotos/foto'>Foto foto criado por rawpixel.com - br.freepik.com</a> */}
						<div class="card">
							<img
								src={tenisUnisex}
								alt="Avatar"
								style={{ width: "100%", height: "70%", borderRadius: "15px 50px 0px 0px" }}
							/>
							<div class="container">
								<h4>
									<b>Tênis branco unisex</b>
								</h4>
								<p style={{ fontSize: "10pt", textDecoration: "line-through", color: "lightgray" }}>
									R$ 300,00
								</p>
								<p style={{ fontSize: "20pt" }}>
									<strong>R$ 249,90</strong>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div style={{ display: "flex", margin: "130px 200px", justifyContent: "space-around" }}>
					<form
						style={{
							display: "flex",
							flexDirection: "column",
							width: "600px",
							borderRadius: "15px 50px",
							backgroundColor: "#2A9D8F",
							color: "white",
							height: "100%",
							alignItems: "center",
							padding: "40px",
						}}
                        onSubmit={handle}
					>
						<p style={{ textAlign: "center", fontSize: "15pt", marginBottom: "50px" }}>
							Ainda não encontrou o que procura? Informe seu nome e e-mail para receber as ofertas da{" "}
							<b>Pé Quente!</b>
						</p>

						<input
							type="text"
							id="fname"
							name="firstname"
							placeholder="Nome"
							style={{
								marginBottom: "10px",
								border: "1px solid transparent",
								width: "100%",
								borderRadius: "15px",
								outline: "none",
								padding: "15px",
							}}
							required
                            value={nome}
                            onChange={e => setNome(e.target.value)}
						/>

						<input
							type="email"
							id="lname"
							name="lastname"
							placeholder="E-mail"
							style={{
								marginBottom: "10px",
								border: "1px solid transparent",
								width: "100%",
								borderRadius: "15px",
								outline: "none",
								padding: "15px",
							}}
							required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
						/>

						<div style={{ marginBottom: "20px" }}>
							<input id="checbox" type="checkbox" required />
							<span for="checbox" style={{ fontSize: "10pt" }}>
								Ao marcar este campo você concorda com nossa{" "}
								<a href="/" style={{ color: "white" }}>
									<strong>Política de Privacidade</strong>
								</a>
								.
							</span>
						</div>

						<input
							type="submit"
							value="Enviar"
							style={{
								fontWeight: "400",
								display: "inline-block",
								padding: ".7rem 3rem",
								fontSize: "1rem",
								borderRadius: ".25rem",
								border: "1px solid transparent",
								color: "#fff",
								backgroundColor: "#E76F51",
								borderColor: "#E76F51",
								cursor: "pointer",
							}}
						/>
					</form>
				</div>
			</div>
		</>
	);
}
