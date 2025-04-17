

const scriptsInEvents = {

	async EventosFloresta_Event5_Act2(runtime, localVars)
	{
		runtime.globalVars.vidas = vidas;
	},

	async EventosFloresta_Event12_Act3(runtime, localVars)
	{
		runtime.goToLayout("game over");
	},

	async EventosFloresta_Event15_Act3(runtime, localVars)
	{
		let vidas = runtime.globalVars.vidas;
		
		vidas--;
		
		runtime.globalVars.vidas = vidas;
		
		
	},

	async EventosFloresta_Event18_Act1(runtime, localVars)
	{
		runtime.goToLayout("fase 2");
	},

	async EventosFloresta_Event21_Act1(runtime, localVars)
	{
		const inimigo = runtime.objects.inimigo.getFirstInstance();
		
		if (inimigo) {
		    inimigo.setAnimation("atacando");
		}
		
		
	},

	async EventosFloresta_Event21_Act4(runtime, localVars)
	{
		let vidas = runtime.globalVars.vidas;
		
		vidas--;
		
		runtime.globalVars.vidas = vidas;
	},

	async EventosTelaGolemAcorda_Event8_Act1(runtime, localVars)
	{
		runtime.goToLayout("floresta");
	},

	async FolhaDeEventosDaFaseDoFimDoJogo_Event4_Act2(runtime, localVars)
	{
		runtime.goToLayout("pb");
	},

	async EventosTelaInicial_Event1_Act2(runtime, localVars)
	{
		runtime.goToLayout ("tela golem acorda");
	},

	async EventosTelaInicial_Event2_Act1(runtime, localVars)
	{
		runtime.goToLayout("tela jogabilidade");
	},

	async FolhaDeEventosGameOver_Event1_Act2(runtime, localVars)
	{
		runtime.goToLayout ("floresta");
	},

	async FolhaDeEventosJogabilidade_Event1_Act1(runtime, localVars)
	{
		runtime.goToLayout("tela inicial");
	},

	async FolhaDeEventosDaFase2_Event6_Act4(runtime, localVars)
	{
		runtime.goToLayout("game over");
	},

	async FolhaDeEventosDaFase2_Event7_Act2(runtime, localVars)
	{
		runtime.goToLayout ("fim do jogo");
	},

	async FolhaDeEventosPb_Event1_Act2(runtime, localVars)
	{
		runtime.goToLayout("tela inicial");
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
