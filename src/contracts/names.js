const names = [
    'AlphaToken',
    'BetaToken',
    'GammaToken',
    'DeltaToken',
    'EpsilonToken',
    'ZetaToken',
    'EtaToken',
    'ThetaToken',
    'IotaToken',
    'KappaToken',
    'LambdaToken',
    'MuToken',
    'NuToken',
    'XiToken',
    'OmicronToken',
    'PiToken',
    'RhoToken',
    'SigmaToken',
    'TauToken',
    'UpsilonToken',
    'PhiToken',
    'ChiToken',
    'PsiToken',
    'OmegaToken',
    'AetherToken',
    'BlazeToken',
    'CinderToken',
    'DuskToken',
    'EmberToken',
    'FrostToken',
    'GaleToken',
    'HorizonToken',
    'IrisToken',
    'JadeToken',
    'KiteToken',
    'LunarToken',
    'MistToken',
    'NebulaToken',
    'ObsidianToken',
    'PinnacleToken',
    'QuartzToken',
    'RadiantToken',
    'SapphireToken',
    'TidalToken',
    'UmberToken',
    'VortexToken',
    'WispToken',
    'ZenithToken',
    'AquaToken',
    'BreezeToken',
    'CobaltToken',
    'DawnToken',
    'EchoToken',
    'FlareToken',
    'GlimmerToken',
    'HavenToken',
    'IvyToken',
    'JewelToken',
    'KarmaToken',
    'LuxeToken',
    'MosaicToken',
    'NexusToken',
    'OpalToken',
    'PulseToken',
    'QuasarToken',
    'RippleToken',
    'SolsticeToken',
    'TroveToken',
    'UnityToken',
    'VividToken',
    'WhisperToken',
    'XenonToken',
    'YonderToken',
    'ZephyrToken',
    'AegisToken',
    'BasiliskToken',
    'CerberusToken',
    'DrakeToken',
    'EclipseToken',
    'FableToken',
    'GriffinToken',
    'HydraToken',
    'IcarusToken',
    'JotunToken',
    'KrakenToken',
    'LeviathanToken',
    'MinotaurToken',
    'NymphToken',
    'OberonToken',
    'PhoenixToken',
    'QuicksilverToken',
    'RavenToken',
    'SphinxToken',
    'TitanToken',
    'UnicornToken',
    'ValkyrieToken',
    'WraithToken',
    'XerxesToken',
    'YetiToken',
    'ZeusToken',
    'AmberToken',
    'BerylToken',
    'CitrineToken',
    'DiamondToken',
    'EmeraldToken',
    'FireOpalToken',
    'GarnetToken',
    'HeliodorToken',
    'ImperialTopazToken',
    'JasperToken',
    'KunziteToken',
    'LapisLazuliToken',
    'MoonstoneToken',
    'NephriteToken',
    'OnyxToken',
    'PeridotToken',
    'QuartziteToken',
    'RubyToken',
    'SodaliteToken',
    'TopazToken',
    'UvaroviteToken',
    'VarisciteToken',
    'WatermelonTourmalineToken',
    'XenotimeToken',
    'YellowBerylToken',
    'ZirconToken',
    'AbyssToken',
    'BlizzardToken',
    'CavernToken',
    'DynamoToken',
    'ElysiumToken',
    'FrostbiteToken',
    'GaleForceToken',
    'HurricaneToken',
    'InfernoToken',
    'JungleToken',
    'KaleidoscopeToken',
    'LabyrinthToken',
    'MysticToken',
    'NebulonToken',
    'OblivionToken',
    'ParadoxToken',
    'QuagmireToken',
    'RiftToken',
    'SundownToken',
    'TempestToken',
    'UmbraToken',
    'VortexToken',
    'WhirlwindToken',
    'XenolithToken',
    'YonderToken',
    'ZenToken',
    'AetheriumToken',
    'BlitzToken',
    'CrescentToken',
    'DuskfallToken',
    'ElysianToken',
    'FableToken',
    'GlimpseToken',
    'HorizonToken',
    'IllusionToken',
    'JubilantToken',
    'KismetToken',
    'LuminousToken',
    'MystiqueToken',
    'NirvanaToken',
    'OracleToken',
    'PinnacleToken',
    'QuestToken',
    'RadianceToken',
    'SerenityToken',
    'TranquilToken',
    'UtopiaToken',
    'VanguardToken',
    'WhimsyToken',
    'XenonToken',
    'YonderToken',
    'ZephyrToken',
    'AbyssalToken',
    'BlazingToken',
    'CelestialToken',
    'DawnlightToken',
    'EclipseToken',
    'FrostfireToken',
    'GaleToken',
    'HallowedToken',
    'IgniteToken',
    'JadeiteToken',
    'KaleToken',
    'LunarToken',
    'MysticToken',
    'NebulaToken',
    'ObsidianToken',
    'PulsarToken',
    'QuasarToken',
    'RadiantToken',
    'SapphireToken',
    'TitaniumToken',
    'UmbraToken',
    'VortexToken',
    'WanderlustToken',
    'XenithToken',
    'YonderToken',
    'ZenithToken',
    'AetherToken',
    'BlizzardToken',
    'CinderToken',
    'DuskToken',
    'EmberToken',
    'FrostToken',
    'GaleToken',
    'HorizonToken',
    'IrisToken',
    'JadeToken',
    'KiteToken',
    'LuxeToken',
    'MosaicToken',
    'NexusToken',
    'OpalToken',
    'PulseToken',
    'QuicksilverToken',
    'RippleToken',
    'SolsticeToken',
    'TroveToken',
    'UnityToken',
    'VividToken',
    'WhisperToken',
    'XenonToken',
    'YonderToken',
    'ZephyrToken',
    'AegisToken',
    'BasiliskToken',
    'CerberusToken',
    'DrakeToken',
    'EclipseToken',
    'FableToken',
    'GriffinToken',
    'HydraToken',
    'IcarusToken',
    'JotunToken',
    'KrakenToken',
    'LeviathanToken',
    'MinotaurToken',
    'NymphToken',
    'OberonToken',
    'PhoenixToken',
    'QuicksilverToken',
    'RavenToken',
    'SphinxToken',
    'TitanToken',
    'UnicornToken',
    'ValkyrieToken',
    'WraithToken',
    'XerxesToken',
    'YetiToken',
    'ZeusToken',
    'AmberToken',
    'BerylToken',
    'CitrineToken',
    'DiamondToken',
    'EmeraldToken',
    'FireOpalToken',
    'GarnetToken',
    'HeliodorToken',
    'ImperialTopazToken',
    'JasperToken',
    'KunziteToken',
    'LapisLazuliToken',
    'MoonstoneToken',
    'NephriteToken',
    'OnyxToken',
    'PeridotToken',
    'QuartziteToken',
    'RubyToken',
    'SodaliteToken',
    'TopazToken',
    'UvaroviteToken',
    'VarisciteToken',
    'WatermelonTourmalineToken',
    'XenotimeToken',
    'YellowBerylToken',
    'ZirconToken',
    'AbyssToken',
    'BlizzardToken',
    'CavernToken',
    'DynamoToken',
    'ElysiumToken',
    'FrostbiteToken',
    'GaleForceToken',
    'HurricaneToken',
    'InfernoToken',
    'JungleToken',
    'KaleidoscopeToken',
    'LabyrinthToken',
    'MysticToken',
    'NebulonToken',
    'OblivionToken',
    'ParadoxToken',
    'QuagmireToken',
    'RiftToken',
    'SundownToken',
    'TempestToken',
    'UmbraToken',
    'VortexToken',
    'WhirlwindToken',
    'XenolithToken',
    'YonderToken',
    'ZenToken',
    'AetheriumToken',
    'BlitzToken',
    'CrescentToken',
    'DuskfallToken',
    'ElysianToken',
    'FableToken',
    'GlimpseToken',
    'HorizonToken',
    'IllusionToken',
    'JubilantToken',
    'KismetToken',
    'LuminousToken',
    'MystiqueToken',
    'NirvanaToken',
    'OracleToken',
    'PinnacleToken',
    'QuestToken',
    'RadianceToken',
    'SerenityToken',
    'TranquilToken',
    'UtopiaToken',
    'VanguardToken',
    'WhimsyToken',
    'XenonToken',
    'YonderToken',
    'ZephyrToken',
    'AbyssalToken',
    'BlazingToken',
    'CelestialToken',
    'DawnlightToken',
    'EclipseToken',
    'FrostfireToken',
    'GaleToken',
    'HallowedToken',
    'IgniteToken',
    'JadeiteToken',
    'KaleToken',
    'LunarToken',
    'MysticToken',
    'NebulaToken',
    'ObsidianToken',
    'PulsarToken',
    'QuasarToken',
    'RadiantToken',
    'SapphireToken',
    'TitaniumToken',
    'UmbraToken',
    'VortexToken',
    'WanderlustToken',
    'XenithToken',
    'YonderToken',
    'ZenithToken',
    'AetherToken',
    'BlizzardToken',
    'CinderToken',
    'DuskToken',
    'EmberToken',
    'FrostToken',
    'GaleToken',
    'HorizonToken',
    'IrisToken',
    'JadeToken',
    'KiteToken',
    'LuxeToken',
    'MosaicToken',
    'NexusToken',
    'OpalToken',
    'PulseToken',
    'QuicksilverToken',
    'RippleToken',
    'SolsticeToken',
    'TroveToken',
    'UnityToken',
    'VividToken',
    'WhisperToken',
    'XenonToken',
    'YonderToken',
    'ZephyrToken',
    'AegisToken',
    'BasiliskToken',
    'CerberusToken',
    'DrakeToken',
    'EclipseToken',
    'FableToken',
    'GriffinToken',
    'HydraToken',
    'IcarusToken',
    'JotunToken',
    'KrakenToken',
    'LeviathanToken',
    'MinotaurToken',
    'NymphToken',
    'OberonToken',
    'PhoenixToken',
    'QuicksilverToken',
    'RavenToken',
    'SphinxToken',
    'TitanToken',
    'UnicornToken',
    'ValkyrieToken',
    'WraithToken',
    'XerxesToken',
    'YetiToken',
    'ZeusToken',
    'AmberToken',
    'BerylToken',
    'CitrineToken',
    'DiamondToken',
    'EmeraldToken',
    'FireOpalToken',
    'GarnetToken',
    'HeliodorToken',
    'ImperialTopazToken',
    'JasperToken',
    'KunziteToken',
    'LapisLazuliToken',
    'MoonstoneToken',
    'NephriteToken',
    'OnyxToken',
    'PeridotToken',
    'QuartziteToken',
    'RubyToken',
    'SodaliteToken',
    'TopazToken',
    'UvaroviteToken',
    'VarisciteToken',
    'WatermelonTourmalineToken',
    'XenotimeToken',
    'YellowBerylToken',
    'ZirconToken',
    'AbyssToken',
    'BlizzardToken',
    'CavernToken',
    'DynamoToken',
    'ElysiumToken',
    'FrostbiteToken',
    'GaleForceToken',
    'HurricaneToken',
    'InfernoToken',
    'JungleToken',
    'KaleidoscopeToken',
    'LabyrinthToken',
    'MysticToken',
    'NebulonToken',
    'OblivionToken',
    'ParadoxToken',
    'QuagmireToken',
    'RiftToken',
    'SundownToken',
    'TempestToken',
    'UmbraToken',
    'VortexToken',
    'WhirlwindToken',
    'XenolithToken',
    'YonderToken',
    'ZenToken',
    'AetheriumToken',
    'BlitzToken',
    'CrescentToken',
    'DuskfallToken',
    'ElysianToken',
    'FableToken',
    'GlimpseToken',
    'HorizonToken',
    'IllusionToken',
    'JubilantToken',
    'KismetToken',
    'LuminousToken',
    'MystiqueToken',
    'NirvanaToken',
    'OracleToken',
    'PinnacleToken',
    'QuestToken',
    'RadianceToken',
    'SerenityToken',
    'TranquilToken',
    'UtopiaToken',
    'VanguardToken',
    'WhimsyToken',
    'XenonToken',
    'YonderToken',
    'ZephyrToken',
    'AbyssalToken',
    'BlazingToken',
    'CelestialToken',
    'DawnlightToken',
    'EclipseToken',
    'FrostfireToken',
    'GaleToken',
    'HallowedToken',
    'IgniteToken',
    'JadeiteToken',
    'KaleToken',
    'LunarToken',
    'MysticToken',
    'NebulaToken',
    'ObsidianToken',
    'PulsarToken',
    'QuasarToken',
    'RadiantToken',
    'SapphireToken',
    'TitaniumToken',
    'UmbraToken',
    'VortexToken',
    'WanderlustToken',
    'XenithToken',
    'YonderToken',
    'ZenithToken',
    'AetherToken',
    'BlizzardToken',
    'CinderToken',
    'DuskToken',
    'EmberToken',
    'FrostToken',
    'GaleToken',
    'HorizonToken',
    'IrisToken',
    'JadeToken',
    'KiteToken',
    'LuxeToken',
    'MosaicToken',
    'NexusToken',
    'OpalToken',
    'PulseToken',
    'QuicksilverToken',
    'RippleToken',
    'SolsticeToken',
    'TroveToken',
    'UnityToken',
    'VividToken',
    'WhisperToken',
    'XenonToken',
    'YonderToken',
    'ZephyrToken',
    'AegisToken',
    'BasiliskToken',
    'CerberusToken',
    'DrakeToken',
    'EclipseToken',
    'FableToken',
    'GriffinToken',
    'HydraToken',
    'IcarusToken',
    'JotunToken',
    'KrakenToken',
    'LeviathanToken',
    'MinotaurToken',
    'NymphToken',
    'OberonToken',
    'PhoenixToken',
    'QuicksilverToken',
    'RavenToken',
    'SphinxToken',
    'TitanToken',
    'UnicornToken',
    'ValkyrieToken',
    'WraithToken',
    'XerxesToken',
    'YetiToken',
    'ZeusToken',
    'AmberToken',
    'BerylToken',
    'CitrineToken',
    'DiamondToken',
    'EmeraldToken',
    'FireOpalToken',
    'GarnetToken',
    'HeliodorToken',
    'ImperialTopazToken',
    'JasperToken',
    'KunziteToken',
    'LapisLazuliToken',
    'MoonstoneToken',
    'NephriteToken',
    'OnyxToken',
    'PeridotToken',
    'QuartziteToken',
    'RubyToken',
    'SodaliteToken',
    'TopazToken',
    'UvaroviteToken',
    'VarisciteToken',
    'WatermelonTourmalineToken',
    'XenotimeToken',
    'YellowBerylToken',
    'ZirconToken',
    'AbyssToken',
    'BlizzardToken',
    'CavernToken',
    'DynamoToken',
    'ElysiumToken',
    'FrostbiteToken',
    'GaleForceToken',
    'HurricaneToken',
    'InfernoToken',
    'JungleToken',
    'KaleidoscopeToken',
    'LabyrinthToken',
    'MysticToken',
    'NebulonToken',
    'OblivionToken',
    'ParadoxToken',
    'QuagmireToken',
    'RiftToken',
    'SundownToken',
    'TempestToken',
    'UmbraToken',
    'VortexToken',
    'WhirlwindToken',
    'XenolithToken',
    'YonderToken',
    'ZenToken',
    'AetheriumToken',
    'BlitzToken',
    'CrescentToken',
    'DuskfallToken',
    'ElysianToken',
    'FableToken',
    'GlimpseToken',
    'HorizonToken',
    'IllusionToken',
    'JubilantToken',
    'KismetToken',
    'LuminousToken',
    'MystiqueToken',
    'NirvanaToken',
    'OracleToken',
    'PinnacleToken',
    'QuestToken',
    'RadianceToken',
    'SerenityToken',
    'TranquilToken',
    'UtopiaToken',
    'VanguardToken',
    'WhimsyToken',
    'XenonToken',
    'YonderToken',
    'ZephyrToken',
    'AbyssalToken',
    'BlazingToken',
    'CelestialToken',
    'DawnlightToken',
    'EclipseToken',
    'FrostfireToken',
    'GaleToken',
    'HallowedToken',
    'IgniteToken',
    'JadeiteToken',
    'KaleToken',
    'LunarToken',
    'MysticToken',
    'NebulaToken',
    'ObsidianToken',
    'PulsarToken',
    'QuasarToken',
    'RadiantToken',
    'SapphireToken',
    'TitaniumToken',
    'UmbraToken',
    'VortexToken',
    'WanderlustToken',
    'XenithToken',
    'YonderToken',
    'ZenithToken',
    'AetherToken',
    'BlizzardToken',
    'CinderToken',
    'DuskToken',
    'EmberToken',
    'FrostToken',
    'GaleToken',
    'HorizonToken',
    'IrisToken',
    'JadeToken',
    'KiteToken',
    'LuxeToken',
    'MosaicToken',
    'NexusToken',
    'OpalToken',
    'PulseToken',
    'QuicksilverToken',
    'RippleToken',
    'SolsticeToken',
    'TroveToken',
    'UnityToken',
    'VividToken',
    'WhisperToken',
    'XenonToken',
    'YonderToken',
    'ZephyrToken',
    'AegisToken',
    'BasiliskToken',
    'CerberusToken',
    'DrakeToken',
    'EclipseToken',
    'FableToken',
    'GriffinToken',
    'HydraToken',
    'IcarusToken',
    'JotunToken',
    'KrakenToken',
    'LeviathanToken',
    'MinotaurToken',
    'NymphToken',
    'OberonToken',
    'PhoenixToken',
    'QuicksilverToken',
    'RavenToken',
    'SphinxToken',
    'TitanToken',
    'UnicornToken',
    'ValkyrieToken',
    'WraithToken',
    'XerxesToken',
    'YetiToken',
    'ZeusToken',
    'AmberToken',
    'BerylToken',
    'CitrineToken',
    'DiamondToken',
    'EmeraldToken',
    'FireOpalToken',
    'GarnetToken',
    'HeliodorToken',
    'ImperialTopazToken',
    'JasperToken',
    'KunziteToken',
    'LapisLazuliToken',
    'MoonstoneToken',
    'NephriteToken',
    'OnyxToken',
    'PeridotToken',
    'QuartziteToken',
    'RubyToken',
    'SodaliteToken',
    'TopazToken',
    'UvaroviteToken',
    'VarisciteToken',
    'WatermelonTourmalineToken',
    'XenotimeToken',
    'YellowBerylToken',
    'ZirconToken',
    'AbyssToken',
    'BlizzardToken',
    'CavernToken',
    'DynamoToken',
    'ElysiumToken',
    'FrostbiteToken',
    'GaleForceToken',
    'HurricaneToken',
    'InfernoToken',
    'JungleToken',
    'KaleidoscopeToken',
    'LabyrinthToken',
    'MysticToken',
    'NebulonToken',
    'OblivionToken',
    'ParadoxToken',
    'QuagmireToken',
    'RiftToken',
    'SundownToken',
    'TempestToken',
    'UmbraToken',
    'VortexToken',
    'WhirlwindToken',
    'XenolithToken',
    'YonderToken',
    'ZenToken',
    'AetheriumToken',
    'BlitzToken',
    'CrescentToken',
    'DuskfallToken',
    'ElysianToken',
    'FableToken',
    'GlimpseToken',
    'HorizonToken',
    'IllusionToken',
    'JubilantToken',
    'KismetToken',
    'LuminousToken',
    'MystiqueToken',
    'NirvanaToken',
    'OracleToken',
    'PinnacleToken',
    'QuestToken',
    'RadianceToken',
    'SerenityToken',
    'TranquilToken',
    'UtopiaToken',
    'VanguardToken',
    'WhimsyToken',
    'XenonToken',
    'YonderToken',
    'ZephyrToken',
    'AbyssalToken',
    'BlazingToken',
    'CelestialToken',
    'DawnlightToken',
    'EclipseToken',
    'FrostfireToken',
    'GaleToken',
    'HallowedToken',
    'IgniteToken',
    'JadeiteToken',
    'KaleToken',
    'LunarToken',
    'MysticToken',
    'NebulaToken',
    'ObsidianToken',
    'PulsarToken',
    'QuasarToken',
    'RadiantToken',
    'SapphireToken',
    'TitaniumToken',
    'UmbraToken',
    'VortexToken',
    'WanderlustToken',
    'XenithToken',
    'YonderToken',
    'ZenithToken',
    'AetherToken',
    'BlizzardToken',
    'CinderToken',
    'DuskToken',
    'EmberToken',
    'FrostToken',
    'GaleToken',
    'HorizonToken',
    'IrisToken',
    'JadeToken',
    'KiteToken',
    'LuxeToken',
    'MosaicToken',
    'NexusToken',
    'OpalToken',
    'PulseToken',
    'QuicksilverToken',
    'RippleToken',
    'SolsticeToken',
    'TroveToken',
    'UnityToken',
    'VividToken',
    'WhisperToken',
    'XenonToken',
    'YonderToken',
    'ZephyrToken',
    'AegisToken',
    'BasiliskToken',
    'CerberusToken',
    'DrakeToken',
    'EclipseToken',
    'FableToken',
    'GriffinToken',
    'HydraToken',
    'IcarusToken',
    'JotunToken',
    'KrakenToken',
    'LeviathanToken',
    'MinotaurToken',
    'NymphToken',
    'OberonToken',
    'PhoenixToken',
    'QuicksilverToken',
    'RavenToken',
    'SphinxToken',
    'TitanToken',
    'UnicornToken',
    'ValkyrieToken',
    'WraithToken',
    'XerxesToken',
    'YetiToken',
    'ZeusToken',
    'AmberToken',
    'BerylToken',
    'CitrineToken',
    'DiamondToken',
    'EmeraldToken',
    'FireOpalToken',
    'GarnetToken',
    'HeliodorToken',
    'ImperialTopazToken',
    'JasperToken',
    'KunziteToken',
    'LapisLazuliToken',
    'MoonstoneToken',
    'NephriteToken',
    'OnyxToken',
    'PeridotToken',
    'QuartziteToken',
    'RubyToken',
    'SodaliteToken',
    'TopazToken',
    'UvaroviteToken',
    'VarisciteToken',
    'WatermelonTourmalineToken',
    'XenotimeToken',
    'YellowBerylToken',
    'ZirconToken',
    'AbyssToken',
    'BlizzardToken',
    'CavernToken',
    'DynamoToken',
    'ElysiumToken',
    'FrostbiteToken',
    'GaleForceToken',
    'HurricaneToken',
    'InfernoToken',
    'JungleToken',
    'KaleidoscopeToken',
    'LabyrinthToken',
    'MysticToken',
    'NebulonToken',
    'OblivionToken',
    'ParadoxToken',
    'QuagmireToken',
    'RiftToken',
    'SundownToken',
    'TempestToken',
    'UmbraToken',
    'VortexToken',
    'WhirlwindToken',
    'XenolithToken',
    'YonderToken',
    'ZenToken',
    'AetheriumToken',
    'BlitzToken',
    'CrescentToken',
    'DuskfallToken',
    'ElysianToken',
    'FableToken',
    'GlimpseToken',
    'HorizonToken',
    'IllusionToken',
    'JubilantToken',
    'KismetToken',
    'LuminousToken',
    'MystiqueToken',
    'NirvanaToken',
    'NirvanaToken',
    'OracleToken',
    'PinnacleToken',
    'QuestToken',
    'RadianceToken',
    'SerenityToken',
    'TranquilToken',
    'UtopiaToken',
    'VanguardToken',
    'WhimsyToken',
    'XenonToken',
    'YonderToken',
    'ZephyrToken',
    'AbyssalToken',
    'BlazingToken',
    'CelestialToken',
    'DawnlightToken',
    'EclipseToken',
    'FrostfireToken',
    'GaleToken',
    'HallowedToken',
    'IgniteToken',
    'JadeiteToken',
    'KaleToken',
    'LunarToken',
    'MysticToken',
    'NebulaToken',
    'ObsidianToken',
    'PulsarToken',
    'QuasarToken',
    'RadiantToken',
    'SapphireToken',
    'TitaniumToken',
    'UmbraToken',
    'VortexToken',
    'WanderlustToken',
    'XenithToken',
    'YonderToken',
    'ZenithToken',
    'AetherToken',
    'BlizzardToken',
    'CinderToken',
    'DuskToken',
    'EmberToken',
    'FrostToken',
    'GaleToken',
    'HorizonToken',
    'IrisToken',
    'JadeToken',
    'KiteToken',
    'LuxeToken',
    'MosaicToken',
    'NexusToken',
    'OpalToken',
    'PulseToken',
    'QuicksilverToken',
    'RippleToken',
    'SolsticeToken',
    'TroveToken',
    'UnityToken',
    'VividToken',
    'WhisperToken',
    'XenonToken',
    'YonderToken',
    'ZephyrToken',
    'AegisToken',
    'BasiliskToken',
    'CerberusToken',
    'DrakeToken',
    'EclipseToken',
    'FableToken',
    'GriffinToken',
    'HydraToken',
    'IcarusToken',
    'JotunToken',
    'KrakenToken',
    'LeviathanToken',
    'MinotaurToken',
    'NymphToken',
    'OberonToken',
    'PhoenixToken',
    'QuicksilverToken',
    'RavenToken',
    'SphinxToken',
    'TitanToken',
    'UnicornToken',
    'ValkyrieToken',
    'WraithToken',
    'XerxesToken',
    'YetiToken',
    'ZeusToken',
    'AmberToken',
    'BerylToken',
    'CitrineToken',
    'DiamondToken',
    'EmeraldToken',
    'FireOpalToken',
    'GarnetToken',
    'HeliodorToken',
    'ImperialTopazToken',
    'JasperToken',
    'KunziteToken',
    'LapisLazuliToken',
    'MoonstoneToken',
    'NephriteToken',
    'OnyxToken',
    'PeridotToken',
    'QuartziteToken',
    'RubyToken',
    'SodaliteToken',
    'TopazToken',
    'UvaroviteToken',
    'VarisciteToken',
    'WatermelonTourmalineToken',
    'XenotimeToken',
    'YellowBerylToken',
    'ZirconToken',
    'AbyssToken',
    'BlizzardToken',
    'CavernToken',
    'DynamoToken',
    'ElysiumToken',
    'FrostbiteToken',
];
export const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
};
