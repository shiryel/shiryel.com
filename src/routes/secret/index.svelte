<script>
	import { onMount } from 'svelte';

	let to_texts = [
		'Successfully credited entropy passed from boot loader.',
		'systemd 247.3-1-arch running in system mode. (+PAM +AUDIT -SELINUX -IMA -APPARMOR +SMACK -SYSVINIT +UTMP +LIBCRYPTSETUP +GCRYPT +GNUTLS +ACL +XZ +LZ4 +ZSTD +SECCOMP +BLKID +ELFUTILS +KMOD +IDN2 -IDN +PCRE2 default-hierarchy=hybrid)',
		'Detected architecture x86-64.',
		'Set hostname to <shiryel>.',
		'Queued start job for default target Graphical Interface.',
		'Created slice system-getty.slice.',
		'Created slice system-modprobe.slice.',
		'Created slice system-systemd.fdisck.slice.',
		'Created slice User and Session Slice.',
		'Started Dispatch Password Requests to Console Directory Watch.',
		'Started Forward Password Requests to Wall Directory Watch.',
		'Set up automount Arbitrary Executable File Formats File System Automount Point.',
		'Reached target Local Encrypted Volumes.',
		'Reached target Paths.',
		'Reached target Remote File Systems.',
		'Reached target Slices.',
		'Listening on Device-mapper event daemon FIFOs.',
		'Listening on LVM2 poll daemon socket.',
		'Listening on Process Core Dump Socket.',
		'Listening on Journal Audit Socket.',
		'Listening on Journal Socket (/dev/log).',
		'Listening on Journal Socket.',
		'Listening on udev Control Socket.',
		'Listening on udev Kernel Socket.',
		'Mounting Huge Pages File System...',
		'Mounting POSIX Message Queue File System...',
		'Mounting Kernel Debug File System...',
		'Mounting Kernel Trace File System...',
		'Starting Create list of static device nodes for the current kernel...',
		'Starting Monitoring of LVM2 mirrors, snapshots etc. using dmeventd or progress polling...',
		'Starting Load Kernel Module configfs...',
		'Starting Load Kernel Module drm...',
		'Starting Load Kernel Module fuse...',
		'Starting Set Up Additional Binary Formats...',
		'Starting Journal Service...',
		'Condition check resulted in Load Kernel Modules being skipped.',
		'Starting Remount Root and Kernel File Systems...',
		'Condition check resulted in Repartition Root Disk being skipped.',
		'Starting Apply Kernel Variables...',
		'Starting Coldplug All udev Devices...',
		'Mounted Huge Pages File System.',
		'Mounted POSIX Message Queue File System.',
		'Mounted Kernel Debug File System.',
		'Mounted Kernel Trace File System.',
		'Finished Create list of static device nodes for the current kernel.',
		'modprobe@configfs.service: Succeeded.',
		'Finished Load Kernel Module configfs.',
		'Finished Apply Kernel Variables.',
		'Finished Remount Root and Kernel File Systems.',
		'proc-sys-fs-binfmt_misc.automount: Got automount request for /proc/sys/fs/binfmt_misc, triggered by 367 (systemd-binfmt)',
		'Mounting Arbitrary Executable File Formats File System...',
		'Mounting Kernel Configuration File System...',
		'Condition check resulted in First Boot Wizard being skipped.',
		'Condition check resulted in Rebuild Hardware Database being skipped.',
		'Starting Load/Save Random Seed...',
		'Condition check resulted in Create System Users being skipped.',
		'Starting Create Static Device Nodes in /dev...',
		'modprobe@fuse.service: Succeeded.',
		'Finished Load Kernel Module fuse.',
		'Mounted Arbitrary Executable File Formats File System.',
		'Mounted Kernel Configuration File System.',
		'Mounting FUSE Control File System...',
		'modprobe@drm.service: Succeeded.',
		'Finished Load Kernel Module drm.',
		'Finished Set Up Additional Binary Formats.',
		'Mounted FUSE Control File System.',
		'Finished Load/Save Random Seed.',
		'Condition check resulted in First Boot Complete being skipped.',
		'Finished Create Static Device Nodes in /dev.',
		'Starting Rule-based Manager for Device Events and Files...',
		'Started Journal Service.'
	];
	let texts = [];

	function get_result(t) {
		if (Math.random() < 0.5) {
			return { text: t, color: 'green', value: '  OK  ' };
		}

		if (Math.random() < 0.98) {
			return { text: '         ' + t, color: '', value: '' };
		}

		return { text: t, color: 'red', value: 'FAILED' };
	}

	onMount(async () => {
		(function run() {
			if (true) {
				let t = to_texts.pop();
				if (t) {
					t = get_result(t);
					texts = [...texts, t];
				} else {
					window.location.href = '/';
				}

				const bootload = document.getElementById('bootload');
				bootload.scrollTop = bootload.scrollHeight;

				const rand_numbers = [25, 25, 25, 20, 20, 10, 35, 40, 60, 50, 450];
				let rand = rand_numbers[Math.floor(Math.random() * rand_numbers.length)];
				setTimeout(run, rand);
			}
		})();

		return () => {
			clearInterval(bootload);
		};
	});
</script>

<svelte:head>
	<title>Shiryel-OS</title>

	<meta name="description" content="Shiryel-OS" />
	<meta name="keywords" content="shiryel" />

	<meta property="og:title" content="Shiryel-OS" />
	<meta
		property="og:description"
		content="A blazing fast OS where all fennecs around the world can use without problems"
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.shiryel.com/" />
	<meta property="og:image" content="https://shiryel.com/images/logo-512.png" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@shiryel_" />
	<meta name="twitter:creator" content="@shiryel_" />
</svelte:head>

<section id="bootload">
	<pre>
    {#each texts as { text, color, value }}
      {#if value}
        [<span id={color}>{value}</span>] {text}<br />
      {:else}
        {text}<br />
      {/if}
    {/each}
  </pre>
</section>

<style>
	section {
		font-family: menlo, inconsolata, monospace;
		font-size: calc(1em - 2px);
    line-height: 1.5;
		color: #555;

		background-color: black;
		height: 100vh;
		overflow: hidden;
		max-height: 100vh;
	}

	pre {
		display: inline-block;
		color: white;
	}

	#green {
		color: green;
	}

	#red {
		color: red;
	}

	@media (min-width: 480px) {
		pre {
			padding-left: 20px;
		}
	}
</style>
