<script>
</script>

<main>
	<section>
		<a class="b1" href="https://blog.shiryel.com">Blog</a>
		<a class="b2" href="projects">Projects (wip)</a>
		<a class="b3" href="artwork">Artwork (wip)</a>
		<a class="b4" href="about">About (wip)</a>
		<div class="mid">
			<p>Welcome to</p>
			<p>Shiryel's Den</p>
			<p>·</p>
			<p class="press">press a bean to continue</p>
		</div>
		<a class="lower1" href="secret">.</a>
		<div class="lower2" />
	</section>
</main>

<style>
	a {
		color: white;
		text-decoration: none;
	}

	/*******
   * Paw *
   *******/

	.b1,
	.b2,
	.b3,
	.b4,
	.mid,
	.lower1,
	.lower2 {
		display: flex;
		justify-content: center;
		align-items: center;
		/*#DC8D84*/
		background: #84acdc;
		border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
	}

	.b1:hover,
	.b2:hover,
	.b3:hover,
	.b4:hover {
		background: #98c0f0;
		cursor: pointer;
	}

	.b1,
	.b4 {
		width: 100%;
		height: 85%;
		margin-top: 220%;
	}

	.b2,
	.b3 {
		width: 100%;
		height: 90%;
		margin-top: 10%;
	}

	.b1 {
		grid-area: b1;
		transform: rotate(-15deg);
	}

	.b2 {
		grid-area: b2;
		margin-left: -15%;
		transform: rotate(-6deg);
	}

	.b3 {
		grid-area: b3;
		margin-left: 15%;
		transform: rotate(6deg);
	}

	.b4 {
		grid-area: b4;
		transform: rotate(15deg);
	}

	.mid {
		display: flex;
		flex-direction: column;
		z-index: 1;
		grid-area: mid;
		width: 80%;
		height: 85%;
	}

	.mid > p {
		font-size: 1em;
	}

	.mid > .press {
		font-size: 0.55em;
	}

	@media (min-width: 800px) {
		.mid > p {
			font-size: 1.2em;
		}

		.mid > .press {
			font-size: 1em;
		}
	}

	.lower1,
	.lower2 {
		width: 130%;
		height: 70%;
		margin-top: 100%;
	}

	.lower1 {
		grid-area: lower1;
		margin-left: 215%;
		transform: rotate(15deg);
	}

	.lower2 {
		grid-area: lower2;
		margin-right: 215%;
		transform: rotate(-15deg);
	}

	section {
		display: grid;
		grid-template-columns: 25% 25% 25% 25%;
		grid-template-rows: 7% 32% 49% auto;
		grid-template-areas:
			'. . . .'
			'b1 b2 b3 b4'
			'lower1 mid mid lower2'
			'. . . .';
		width: 95%;
		height: 65%;
		grid-gap: 2px;
		align-items: center;
		justify-items: center;
	}

	@media (min-width: 800px) {
		section {
			width: 700px;
			height: 900px;
		}
	}

	/**************
   * Background *
   **************/

	main {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: white;
		font-family: 'Just Another Hand', cursive;
		font-size: 2.2rem;
		background-image: linear-gradient(
				45deg,
				rgb(73, 160, 30) 0%,
				rgb(73, 160, 30) 6%,
				rgb(88, 141, 55) 6%,
				rgb(88, 141, 55) 11%,
				rgb(103, 122, 81) 11%,
				rgb(103, 122, 81) 55%,
				rgb(118, 103, 106) 55%,
				rgb(118, 103, 106) 81%,
				rgb(132, 84, 131) 81%,
				rgb(132, 84, 131) 83%,
				rgb(147, 65, 156) 83%,
				rgb(147, 65, 156) 92%,
				rgb(162, 46, 182) 92%,
				rgb(162, 46, 182) 95%,
				rgb(177, 27, 207) 95%,
				rgb(177, 27, 207) 100%
			),
			linear-gradient(
				112.5deg,
				rgb(73, 160, 30) 0%,
				rgb(73, 160, 30) 6%,
				rgb(88, 141, 55) 6%,
				rgb(88, 141, 55) 11%,
				rgb(103, 122, 81) 11%,
				rgb(103, 122, 81) 55%,
				rgb(118, 103, 106) 55%,
				rgb(118, 103, 106) 81%,
				rgb(132, 84, 131) 81%,
				rgb(132, 84, 131) 83%,
				rgb(147, 65, 156) 83%,
				rgb(147, 65, 156) 92%,
				rgb(162, 46, 182) 92%,
				rgb(162, 46, 182) 95%,
				rgb(177, 27, 207) 95%,
				rgb(177, 27, 207) 100%
			),
			linear-gradient(
				67.5deg,
				rgb(73, 160, 30) 0%,
				rgb(73, 160, 30) 6%,
				rgb(88, 141, 55) 6%,
				rgb(88, 141, 55) 11%,
				rgb(103, 122, 81) 11%,
				rgb(103, 122, 81) 55%,
				rgb(118, 103, 106) 55%,
				rgb(118, 103, 106) 81%,
				rgb(132, 84, 131) 81%,
				rgb(132, 84, 131) 83%,
				rgb(147, 65, 156) 83%,
				rgb(147, 65, 156) 92%,
				rgb(162, 46, 182) 92%,
				rgb(162, 46, 182) 95%,
				rgb(177, 27, 207) 95%,
				rgb(177, 27, 207) 100%
			),
			linear-gradient(90deg, rgb(24, 15, 143), rgb(32, 11, 32));
		background-blend-mode: overlay, overlay, overlay, normal;
		height: 100vh;
	}

	@media (min-width: 800px) {
		main {
			font-size: 3rem;
		}
	}
</style>
