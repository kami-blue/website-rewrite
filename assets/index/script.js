const homeDiv =
	`<!--Home-->
    <div>
    <h3><b>A Minecraft utility mod for anarchy servers</b></h3>
    <div>
      This is an open source project written primarily by 086, dominikaaaa and iBuyMountainDew. It has many useful combat and general utilities to assist the player.
    </div>
    <br>
    <div>
      See the FAQ pages for information about using the mod itself, and the modules page for information about the 150+ unique modules this mod has.
    </div>
    <div>
    <br>
    This project was started by 086 in early 2018, and it gained popularity for having the best CrystalAura. In late 2019 dominikaaaa picked up the project, noticing the lack of modules, with iBuyMountainDew taking over the project after 6 months of work by dominikaaaa. dominikaaaa has picked the project back up and is still in active development.
    </div>
    <br>
    <div>
    086 ported the original project to the Fabric mod system, in early 2020. You can check it out <a href="https://kamiclient.com">here</a>.
    </div>
    <br>
  </div>
  `;

const installDiv =
	`<!--Install/FAQ-->
    <div>
    <b></b>
    <h3><b>Installing / FAQ</b></h3><b><u>Installing</u></b>
    <div>
      <ol>
        <li>First you need to install Forge for Minecraft 1.12.2.</li>
        <li>Open the KAMI Blue installer</li>
        <li>Select the version that you want to install (latest or beta)</li>
        <li>Open Forge through the Minecraft launcher</li>
      </ol>If you are on Mac then to open the jar you must hold control and right click and select Open in order to open the jar. This is because we don’t want to pay for Apple’s $$$ developer license so
      it gives you a warning.
    </div><br>
    <div>
      If you want to manually install the jar to a MultiMC instance or something, you can still drag the jar file to the mods folder and it works just fine, as the jar is both a Forge mod and installer.
    </div><br>
    <div>
      <b><u>FAQ</u></b>
      <br>
      <div><b>How do I open the GUI?</b></div>
      Press <kbd>Y</kbd>
      <br>You can change this with <code>;bing gui [Another Key]</code>
    </div>
  </div>
  `;

const moduleDiv =
	`<!--Modules-->
  <div>
  <details>
    <summary>Chat (18)</summary>
    <p><ul>
        <li>AntiSpam<p><i>Removes spam and advertising from the chat</i></p></li>
        <li>AutoExcuse<p><i>Makes an excuse for you when you die</i></p></li>
        <li>AutoQMain<p><i>Automatically does '/queue main' on servers</i></p></li>
        <li>AutoReply<p><i>Automatically reply to direct messages</i></p></li>
        <li>AutoTPA<p><i>Automatically accept or decline /TPAs</i></p></li>
        <li>BaritoneRemote<p><i>Remotely control Baritone with /msg</i></p></li>
        <li>ChatEncryption<p><i>Encrypts and decrypts chat messages</i></p></li>
        <li>ChatFilter<p><i>Filters custom words or phrases from the chat</i></p></li>
        <li>ChatTimestamp<p><i>Shows the time a message was sent beside the message</i></p></li>
        <li>CustomChat<p><i>Add a custom ending to your message!</i></p></li>
        <li>DiscordNotifs<p><i>Sends your chat to a set Discord channel</i></p></li>
        <li>FancyChat<p><i>Makes messages you send fancy</i></p></li>
        <li>FormatChat<p><i>Add colour and linebreak support to upstream chat packets</i></p></li>
        <li>FriendHighlight<p><i>Highlights your friends names in chat</i></p></li>
        <li>KamiMoji<p><i>Add emojis to chat using KamiMoji, courtesy of the EmojiAPI.</i></p></li>
        <li>LoginMessage<p><i>Sends a given message to public chat on login.</i></p></li>
        <li>PortalChat<p><i>Allows you to open GUIs in portals</i></p></li>
        <li>Spammer<p><i>Spams text from a file on a set delay into the chat</i></p></li>
    </ul></p>
</details>
<details>
    <summary>Combat (17)</summary>
    <p><ul>
        <li>AimBot<p><i>Automatically aims at entities for you.</i></p></li>
        <li>AntiChainPop<p><i>Enables Surround when popping a totem</i></p></li>
        <li>AntiDeathScreen<p><i>Fixes random death screen glitches</i></p></li>
        <li>AntiFriendHit<p><i>Don't hit your friends</i></p></li>
        <li>Aura<p><i>Hits entities around you</i></p></li>
        <li>AutoEZ<p><i>Sends an insult in chat after killing someone</i></p></li>
        <li>AutoFeetPlace<p><i>Continually places obsidian around your feet</i></p></li>
        <li>AutoLog<p><i>Automatically log when in danger or on low health</i></p></li>
        <li>AutoMend<p><i>Automatically mends armour</i></p></li>
        <li>AutoTotem<p><i>Refills your offhand with totems or other items</i></p></li>
        <li>AutoTrap<p><i>Traps your enemies in obsidian</i></p></li>
        <li>Criticals<p><i>Always do critical attacks</i></p></li>
        <li>CrystalAura<p><i>Places End Crystals to kill enemies</i></p></li>
        <li>OffhandGap<p><i>Holds a God apple when right clicking your sword!</i></p></li>
        <li>Surround<p><i>Surrounds you with obsidian to take less damage</i></p></li>
        <li>TotemPopCounter<p><i>Counts how many times players pop</i></p></li>
        <li>VisualRange<p><i>Shows players who enter and leave range in chat</i></p></li>
    </ul></p>
</details>
<details>
    <summary>Client (7)</summary>
    <p><ul>
        <li>ActiveModules<p><i>Configures ActiveModules colours and modes</i></p></li>
        <li>Baritone<p><i>Configures Baritone settings</i></p></li>
        <li>Capes<p><i>Controls the display of KAMI Blue capes</i></p></li>
        <li>CommandConfig<p><i>Configures client chat related stuff</i></p></li>
        <li>InfoOverlay<p><i>Configures the game information overlay</i></p></li>
        <li>InventoryViewer<p><i>Configures Inventory Viewer's options</i></p></li>
        <li>Tooltips<p><i>Displays handy module descriptions in the GUI</i></p></li>
    </ul></p>
</details>
<details>
    <summary>Misc (31)</summary>
    <p><ul>
        <li>AntiAFK<p><i>Prevents being kicked for AFK</i></p></li>
        <li>AntiBookKick<p><i>Prevents being kicked by clicking on books</i></p></li>
        <li>AntiDisconnect<p><i>Are you sure you want to disconnect?</i></p></li>
        <li>AntiWeather<p><i>Removes rain from your world</i></p></li>
        <li>AutoFish<p><i>Automatically catch fish</i></p></li>
        <li>AutoMine<p><i>Automatically mines chosen ores</i></p></li>
        <li>AutoNametag<p><i>Automatically nametags entities</i></p></li>
        <li>AutoObsidian<p><i>Mines ender chest automatically to fill inventory with obsidian</i></p></li>
        <li>AutoReconnect<p><i>Automatically reconnects after being disconnected</i></p></li>
        <li>AutoRespawn<p><i>Automatically respawn after dying</i></p></li>
        <li>AutoSpawner<p><i>Automatically spawns Withers, Iron Golems and Snowmen</i></p></li>
        <li>AutoTool<p><i>Automatically switch to the best tools when mining or attacking</i></p></li>
        <li>AutoTunnel<p><i>Automatically tunnels forward, at a given size</i></p></li>
        <li>BeaconSelector<p><i>Choose any of the 5 beacon effects regardless of beacon base height</i></p></li>
        <li>BlockData<p><i>Right click blocks to display their data</i></p></li>
        <li>BookCrash<p><i>Crashes servers by sending large packets</i></p></li>
        <li>BossStack<p><i>Modify the boss health GUI to take up less space</i></p></li>
        <li>ColourSign<p><i>Allows ingame colouring of text on signs</i></p></li>
        <li>ConsoleSpam<p><i>Spams Spigot consoles by sending invalid UpdateSign packets</i></p></li>
        <li>CoordsLog<p><i>Automatically logs your coords, based on actions</i></p></li>
        <li>DiscordRPC<p><i>Discord Rich Presence</i></p></li>
        <li>EntityTools<p><i>Right click entities to perform actions on them</i></p></li>
        <li>FakeGamemode<p><i>Fakes your current gamemode client side</i></p></li>
        <li>FakeVanillaClient<p><i>Fakes a modless client when connecting</i></p></li>
        <li>LogoutLogger<p><i>Logs when a player leaves the game</i></p></li>
        <li>MidClickFriends<p><i>Middle click players to friend or unfriend them</i></p></li>
        <li>MountBypass<p><i>Might allow you to mount chested animals on servers that block it</i></p></li>
        <li>NoSoundLag<p><i>Prevents lag caused by sound machines</i></p></li>
        <li>SkinFlicker<p><i>Toggle your skin layers rapidly for a cool skin effect</i></p></li>
        <li>StashFinder<p><i>Logs storage units in render distance.</i></p></li>
        <li>TeleportLogger<p><i>Logs when a player teleports somewhere</i></p></li>
    </ul></p>
</details>
<details>
    <summary>Movement (19)</summary>
    <p><ul>
        <li>AntiHunger<p><i>Reduces hunger lost when moving around</i></p></li>
        <li>AntiLevitation<p><i>Removes levitation potion effect</i></p></li>
        <li>AutoJump<p><i>Automatically jumps if possible</i></p></li>
        <li>AutoRemount<p><i>Automatically remounts your horse</i></p></li>
        <li>AutoWalk<p><i>Automatically walks somewhere</i></p></li>
        <li>ElytraFlight<p><i>Allows infinite and way easier Elytra flying</i></p></li>
        <li>ElytraReplace<p><i>Automatically swap and replace your chestplate and elytra.</i></p></li>
        <li>EntitySpeed<p><i>Abuse client-sided movement to shape sound barrier breaking rideables</i></p></li>
        <li>Flight<p><i>Makes the player fly</i></p></li>
        <li>IceSpeed<p><i>Changes how slippery ice is</i></p></li>
        <li>InventoryMove<p><i>Allows you to walk around with GUIs opened</i></p></li>
        <li>Jesus<p><i>Allows you to walk on water</i></p></li>
        <li>NoSlowDown<p><i>Prevents being slowed down when using an item or going through cobwebs</i></p></li>
        <li>SafeWalk<p><i>Keeps you from walking off edges</i></p></li>
        <li>Sprint<p><i>Automatically makes the player sprint</i></p></li>
        <li>Step<p><i>Changes the vanilla behavior for stepping up blocks</i></p></li>
        <li>Strafe<p><i>Improves control in air</i></p></li>
        <li>TimerSpeed<p><i>Automatically change your timer to go fast</i></p></li>
        <li>Velocity<p><i>Modify knockback impact</i></p></li>
    </ul></p>
</details>
<details>
    <summary>Player (26)</summary>
    <p><ul>
        <li>AntiForceLook<p><i>Stops server packets from turning your head</i></p></li>
        <li>AutoArmour<p><i>Automatically equips armour</i></p></li>
        <li>AutoEat<p><i>Automatically eat when hungry</i></p></li>
        <li>Blink<p><i>Cancels server side packets</i></p></li>
        <li>EndTeleport<p><i>Allows for teleportation when going through end portals</i></p></li>
        <li>Fastbreak<p><i>Breaks block faster and nullifies the break delay</i></p></li>
        <li>FastUse<p><i>Use items faster</i></p></li>
        <li>Freecam<p><i>Leave your body and transcend into the realm of the gods</i></p></li>
        <li>HungerOverlay<p><i>Displays a helpful overlay over your hunger bar.</i></p></li>
        <li>InventoryManager<p><i>Manages your inventory automatically</i></p></li>
        <li>LagNotifier<p><i>Displays a warning when the server is lagging</i></p></li>
        <li>LiquidInteract<p><i>Place blocks on liquid!</i></p></li>
        <li>NoBreakAnimation<p><i>Prevents block break animation server side</i></p></li>
        <li>NoEntityTrace<p><i>Blocks entities from stopping you from mining</i></p></li>
        <li>NoFall<p><i>Prevents fall damage</i></p></li>
        <li>NoPacketKick<p><i>Suppress network exceptions and prevent getting kicked</i></p></li>
        <li>NoSwing<p><i>Cancels server and client swinging packets</i></p></li>
        <li>PacketCancel<p><i>Cancels specific packets used for various actions</i></p></li>
        <li>PacketLogger<p><i>Logs sent packets to a file</i></p></li>
        <li>PitchLock<p><i>Locks your camera pitch</i></p></li>
        <li>PortalGodMode<p><i>Don't take damage in portals</i></p></li>
        <li>Scaffold<p><i>Places blocks under you</i></p></li>
        <li>Timer<p><i>Changes your client tick speed</i></p></li>
        <li>TpsSync<p><i>Synchronizes block states with the server TPS</i></p></li>
        <li>XCarry<p><i>Store items in crafting slots</i></p></li>
        <li>YawLock<p><i>Locks your camera yaw</i></p></li>
    </ul></p>
</details>
<details>
    <summary>Render (31)</summary>
    <p><ul>
        <li>AntiFog<p><i>Disables or reduces fog</i></p></li>
        <li>AntiOverlay<p><i>Prevents rendering of fire, water and block texture overlays.</i></p></li>
        <li>ArmourHUD<p><i>Displays your armour and it's durability on screen</i></p></li>
        <li>ArmourHide<p><i>Hides the armour on selected entities</i></p></li>
        <li>Breadcrumbs<p><i>Draws a tail behind as you move</i></p></li>
        <li>BreakingESP<p><i>Highlights blocks being breaking near you</i></p></li>
        <li>FullBright<p><i>Makes everything brighter!</i></p></li>
        <li>CameraClip<p><i>Allows your 3rd person camera to pass through blocks</i></p></li>
        <li>Chams<p><i>See entities through walls</i></p></li>
        <li>ChunkFinder<p><i>Highlights newly generated chunks</i></p></li>
        <li>CleanGUI<p><i>Modifies parts of the GUI to be transparent</i></p></li>
        <li>ESP<p><i>Highlights entities</i></p></li>
        <li>ExtraTab<p><i>Expands the player tab menu</i></p></li>
        <li>EyeFinder<p><i>Draw lines from entity's heads to where they are looking</i></p></li>
        <li>HoleESP<p><i>Show safe holes for crystal pvp</i></p></li>
        <li>MapPreview<p><i>Previews maps when hovering over them</i></p></li>
        <li>MobOwner<p><i>Displays the owner of tamed mobs</i></p></li>
        <li>Nametags<p><i>Draws descriptive nametags above entities</i></p></li>
        <li>NoHurtCam<p><i>Disables the 'hurt' camera effect</i></p></li>
        <li>NoRender<p><i>Ignore entity spawn packets</i></p></li>
        <li>PlayerModel<p><i>Renders a model of you, or someone you're attacking</i></p></li>
        <li>Search<p><i>Highlights blocks in the world</i></p></li>
        <li>SelectionHighlight<p><i>Highlights object you are looking at</i></p></li>
        <li>ShulkerPreview<p><i>Previews shulkers in the game GUI</i></p></li>
        <li>StorageESP<p><i>Draws an ESP on top of storage units</i></p></li>
        <li>TabFriends<p><i>Highlights friends in the tab menu</i></p></li>
        <li>Tracers<p><i>Draws lines to other living entities</i></p></li>
        <li>Trajectories<p><i>Draws lines to where trajectories are going to fall</i></p></li>
        <li>WaypointRender<p><i>Render saved waypoints</i></p></li>
        <li>XRay<p><i>See through common blocks!</i></p></li>
        <li>Zoom<p><i>Configures FOV</i></p></li>
    </ul></p>
</details>
  </div>
  `;

const devDiv =
	`<!--Contributing-->
    <div>
    <h3><b>Building and Contributing</b></h3>
    <div>
      Please make sure to restart your IDE and reimport 🔄 gradle after running all the setup
      <br>Read Support for help and Troubleshooting for common errors. TODO TODO
      <br>When making a pull request or issue, please follow the Code of Conduct TODo
    </div>
    <br>
    <b><u>Contributing</u></b>
    <div>
      To set up your development environment, make use of the following instructions:
      <br><code>git clone https://github.com/kami-blue/client</code>
    </div>
    <b><u>Import KAMI Blue into your IDE of choice.</u></b>
    <div>
    If you use Intellij, import the <code>build.gradle</code> file
    <br>If you use Eclipse, import a new gradle project and select the <code>kamiblue</code> folder.
    <br> 
    <br>If you do not wish to run from an IDE, use <code>./gradlew runClient</code> to run KAMI Blue 
    (not recommended due to random issues. run <code>./gradlew clean</code> if you experience any with it)
    </div>
    <br>
  </div>
  `;


const discordDiv =
	`<!--Discord-->
    <div>
    <h3><b>Join the Discord</b></h3>

  </div>
  `;
