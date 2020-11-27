<template>
    <div class="content support">

        <!-- Guide -->
      <h2 class="title">Orientation in 10 minutes</h2>
      <div class="sub-title"><font-awesome-icon  :icon="['fab', 'youtube']"/>
        <a href="https://youtu.be/HqAR5BK78RM" target="_blank" style="display: inline-block; vertical-align: middle;">Kikit School's learning approach and field usage</a></div>
      <h2 class="title" style="margin-bottom: 30px;">Guides and Tutorial Videos</h2>
        <!-- English -->
        <div class="resource">
            <div class="logo-item"><img class="logo attachment-full size-full" src="../../../assets/img/common/logo_English.png" height="86" width="200" alt="kitkit english text logo"/></div>
            <div>
                <div class="list clearfix">
                    <div class="item">
                        <a href="https://web.kitkitschool.com/Download/Guide/Kitkit_School_Installation_Guide_EN.pdf" download target="_blank">
                            <font-awesome-icon :icon="['far', 'download']"/>
                            <p class="title">English<br/>Installation<br/><b>Guide (PDF)</b></p>
                        </a>
                    </div>
                    <div class="item">
                        <a href="https://web.kitkitschool.com/Download/Guide/Kitkit_School_User_Guide_EN.pdf" download target="_blank">
                            <font-awesome-icon :icon="['far', 'download']"/>
                            <p class="title" style="margin-top: 46px;">English User<br/><b>Guide (PDF)</b></p>
                        </a>
                    </div>
                    <div class="item">
                        <a href="https://web.kitkitschool.com/Download/Guide/Kitkit_School_Learning_Assessment_Guide_EN.pdf" download target="_blank">
                            <font-awesome-icon :icon="['far', 'download']"/>
                            <p class="title">English Learning<br/>Assessment<br/><b>Guide (PDF)</b></p>
                        </a>
                    </div>
                    <div class="item">
                        <a href="https://youtu.be/LbS90kiYcaU" download target="_blank">
                            <font-awesome-icon :icon="['fab', 'youtube']"/>
                            <p class="title">English<br/>Installation<br/><b>Guide Video</b></p>
                        </a>
                    </div>
                    <div class="item">
                        <a href="https://youtu.be/wQg50ImGN68" download target="_blank">
                            <font-awesome-icon :icon="['fab', 'youtube']"/>
                            <p class="title" style="margin-top: 46px;">English User<br/><b>Guide Video</b></p>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Swahili -->
        <div v-if="productType === 2" class="resource" style="margin-top: 30px">
            <div class="logo-item"><img class="logo attachment-full size-full" src="../../../assets/img/common/logo_Swahili.png" height="71" width="200" alt="kitkit swahili text logo"/></div>
            <div>
                <div class="list clearfix">
                    <div class="item">
                        <a href="https://web.kitkitschool.com/Download/Guide/Kitkit_School_Installation_Guide_Swahili.pdf" download target="_blank">
                            <font-awesome-icon :icon="['far', 'download']"/>
                            <p class="title">Swahili<br/>Installation<br/><b>Guide (PDF)</b></p>
                        </a>
                    </div>
                    <div class="item">
                        <a href="https://web.kitkitschool.com/Download/Guide/Kitkit_School_User_Guide_Swahili.pdf" download target="_blank">
                            <font-awesome-icon :icon="['far', 'download']"/>
                            <p class="title" style="margin-top: 46px;">Swahili User<br/><b>Guide (PDF)</b></p>
                        </a>
                    </div>
                    <div class="item">
                        <a href="https://web.kitkitschool.com/Download/Guide/Kitkit_School_Learning_Assessment_Guide_Swahili.pdf" download target="_blank">
                            <font-awesome-icon :icon="['far', 'download']"/>
                            <p class="title">Swahili Learning<br/>Assessment<br/><b>Guide (PDF)</b></p>
                        </a>
                    </div>
                    <div class="item">
                        <a href="https://youtu.be/PjkQTNkNHTU" download target="_blank">
                            <font-awesome-icon :icon="['fab', 'youtube']"/>
                            <p class="title">Swahili<br/>Installation<br/><b>Guide Video</b></p>
                        </a>
                    </div>
                    <div class="item">
                        <a href="https://youtu.be/4hm_ubVkmXg" download target="_blank">
                            <font-awesome-icon :icon="['fab', 'youtube']"/>
                            <p class="title" style="margin-top: 46px;">Swahili User<br/><b>Guide Video</b></p>
                        </a>
                    </div>
                </div>
            </div>

        </div>
        <!-- // Guide -->

        <!-- FAQ -->
        <h2 class="title">FAQ</h2>
        <div class="faq">
            <!-- Download -->
            <h3 class="subtitle" style="margin-top: 30px;"><font-awesome-icon class="icon" :icon="['far', 'dot-circle']"/>Download</h3>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">Can I install Kitkit School to tablet devices with other OS? Does it need to be an Android?</div>

                </div>
                    </a>
                <p class="answer">
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    Kitkit School is designed to operate on Android tablet devices only.
                </p>
            </div>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">Where do I check the device specification?</div>

                </div>
                    </a>
                <p class="answer">
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    Go to the Settings app on your tablet.<br/>
                    <span class="depth-02">i.</span> For Android OS versions, go to About Tablet or System menu.<br/>
                    <span class="depth-02">ii.</span> For Storage, go to the Storage menu.<br/>
                    <span class="depth-02">iii.</span> For Memory, go to the Memory menu. <br/>
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    The Settings app may look different for tablets made by different manufacturers. Contact your manufacturer for more information.
                </p>
            </div>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">Which files do I need to download?</div>

                </div>
                    </a>
                <p class="answer">
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    You must download all files listed on our download page. Click “Download All” to download all files at once.<br/>
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    “Installer” app can be deleted on the tablet after you have successfully installed Kitkit School.
                </p>
            </div>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">Can I directly download the installation package from the tablet device?</div>

                </div>
                    </a>
                <p class="answer">
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    If you have a stable internet connection, it is possible to download the installation files to your tablet device. However, if you plan to install Kitkit School on multiple devices, we recommend using a computer to download the files once and then copying them to the tablet devices.
                </p>
            </div>

            <!-- Installation -->
            <h3 class="subtitle"><font-awesome-icon class="icon" :icon="['far', 'dot-circle']"/>Installation</h3>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">Can I install Kitkit School to multiple tablet devices?</div>

                </div>
                    </a>
                <p class="answer">
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    Yes. You can install Kitkit School on as many devices as the number of licenses you have indicated during the sign-up process.
                </p>
            </div>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">I could not complete the installation properly.</div>

                </div>
                    </a>
                <p class="answer">
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    First, check if your devices meet below minimum requirements:<br/>
                    <span class="depth-02">i.</span> Supported OS version: Android <span style="font-weight: 600" class="yale">6.0</span> - Android <span style="font-weight: 600" class="yale">9.0</span><br/>
                    <span class="depth-02">ii.</span> Storage: <span style="font-weight: 600" class="yale">16GB</span> with <span style="font-weight: 600" class="yale">6GB</span> available space<br/>
                    <span class="depth-02">iii.</span> RAM: <span style="font-weight: 600" class="yale">2.0GB (minimum 1.7GB)</span><br/>
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    If your tablet does not meet the above minimum requirements, the installer should give you an error message. Check this error message to identify what requirements you are missing. If there is not enough storage space, free up space, or find another device that meets the minimum requirements.<br/>
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    Make sure you have downloaded the entire installation package (all five installation files on the Download page) and have copied it onto your tablet device. If you have all files, the installer app will show a yellow arrow next to each file name.
                </p>
            </div>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">Can I get more licenses?</div>

                </div>
                    </a>
                <p class="answer">
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    Please send an email to <a class="email" href="mailto:kitkitsupport@enuma.com">kitkitsupport@enuma.com</a> with your account information such as your name, ID, email address, and organization.
                </p>
            </div>

            <!-- Using Kitkit School -->
            <h3 class="subtitle"><font-awesome-icon class="icon" :icon="['far', 'dot-circle']"/>Using Kitkit School</h3>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">Would I still be able to access other applications after installing Kitkit School?</div>

                </div>
                    </a>
                <p class="answer">
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    Yes. You can still use other applications other than Kitkit School.
                </p>
            </div>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">Can I add multiple users to one device installed with Kitkit School?</div>

                </div>
                    </a>
                <p class="answer">
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    Yes. You can add up to 100 users to one tablet device. You can check how to add or remove users from the user guide manuals.
                </p>
            </div>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">Can I transfer the user data from one device to another?</div>

                </div>
                    </a>
                <p class="answer">
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    No. The user data will be stored on the device being used and cannot be transferred.
                </p>
            </div>

            <!-- About Dashboard -->
            <h3 class="subtitle"><font-awesome-icon class="icon" :icon="['far', 'dot-circle']"/>About Dashboard</h3>
            <div class="qna">
                <a href="#" @click="toggleActive">
                    <div class="question">
                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">What is a dashboard?</div>
                    </div>
                </a>
                <p class="answer">
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    The “dashboard” is where you can view or download the data related to the learners' progress such as the current game level they are working on, scores on learning assessments, and detailed logs of daily user activities.<br/>
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    In order to use the dashboard functionality, the data from the tablet needs to be uploaded to our server. Please refer to the section on “How do I upload the data?” for more information. When the data has been uploaded to our server, you can see how the registered users on the tablet have been using the Kitkit School.<br/>
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    Data is available by individual users. In order to ensure the accuracy of data, please make sure you have selected the right user profile when playing Kitkit School. For more information on how to create a user profile, please refer to our Kitkit School User Guide.<br/>
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    The dashboard may not display the data immediately after the data upload. It may take up to 2 hours for our server to process all uploaded data.
                </p>
            </div>
            <div class="qna">
                <a href="#" @click="toggleActive">
                    <div class="question">
                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">What types of data are available on the dashboard?</div>
                    </div>
                </a>
                <p class="answer">
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    Once the data from the tablets are uploaded to our server, you will be able to find the user information, total playtime (in minutes), the latest courses that the users have played in literacy and math, and the test scores from pre- and post-tests.<br/>
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    You can download the data as shown on the dashboard by clicking the “Download Dashboard Data” button. You can also download user-specific “Individual Log Data” by clicking the first name of the user. The downloaded data will be saved to your computer as a CSV file.
                </p>
            </div>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">
                    <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                    <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                    <div class="text">How do I upload the data?</div>
                </div>
                    </a>
                <p class="answer">
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    Kitkit School automatically uploads the data to our server when the tablet device is connected to the internet. If you are using Kitkit School in an offline environment, you can bring your tablet devices to a location where you can establish a secure internet connection for the tablets. Once your tablets are connected to the internet securely, they will automatically upload the data to our server.<br/>
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    The dashboard may not display the data immediately after the data upload. It could take up to 2 hours for our server to process all uploaded data.<br/>
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    If your tablet does not upload the data automatically, you can manually upload the data by following the below steps:<br/>
                    <span class="depth-02">i.</span> Go to the “Teacher Menu” and enter 2021 as a password.<br/>
                    <span class="depth-02">ii.</span> Press the “Settings” button.<br/>
                    <span class="depth-02">iii.</span> Press the “Administration” button. When asked to enter a password, enter 5241.<br/>
                    <span class="depth-02">iv.</span> Press the “Upload Log Data” button.<br/>
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    It is recommended that you regularly update your data to our server.
                </p>
            </div>

            <!-- Troubleshooting -->
            <h3 class="subtitle"><font-awesome-icon class="icon" :icon="['far', 'dot-circle']"/>Troubleshooting</h3>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">Kitkit School app crashes or fails to launch on screen.</div>

                </div>
                    </a>
                <p class="answer">
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    The issue may be temporary. Try the following and see if the issue is resolved.<br/>
                    <span class="depth-02">i.</span> Exit the app and then relaunch the app.<br/>
                    <span class="depth-02">ii.</span> Restart the device by turning off and on.<br/>
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    If the above does not resolve the issue, check if all installation files have been properly installed by following the below steps:<br/>
                    <span class="depth-02">i.</span> Go to the Settings app - Applications menu.<br/>
                    <span class="depth-02">ii.</span> Check if you have the following apps in the list of apps installed on the tablet:<br/>
                    <i class="depth-03"> </i> “Kitkit School”, “Kikit School Learning App”, “Kitkit Book Viewer”, and “Kikit Book Data”.<br/>
                    <span class="depth-02">iii.</span> If any of these apps are missing, run the installer again to install all missing apps.
                </p>
            </div>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">Tablet screen turns off while using Kitkit School.</div>

                </div>
                    </a>
                <p class="answer">
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    Most tablets are set to turn off the screen if the user does not touch the screen for a set period of time.<br/>
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    Kitkit school is a learning app, and users may not touch the screen while exploring some contents for a longer time. To allow ample amount of time for users to explore Kitkit School’s contents, it is recommended that you change the screen display time to over 10 minutes. You can do this from the Settings app - display setting menu.
                </p>
            </div>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">Can I reinstall Kitkit School?</div>

                </div>
                    </a>
                <p class="answer last">
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    You may have to reinstall Kitkit School apps if other troubleshooting attempts do not resolve the issue.<br/>
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    Before installing Kitkit School again, make sure to uninstall all Kitkit School apps first.<br/>
                    <span class="depth-02">i.</span> Go to the Settings app - Applications menu.<br/>
                    <span class="depth-02">ii.</span> Find the following apps from the list of apps installed on the tablet:<br/>
                    <i class="depth-03"> </i> “Kitkit School”, “Kikit School Learning App”, “Kitkit Book Viewer”, and “Kikit Book Data”.<br/>
                    <span class="depth-02">iii.</span> Click each one of them and tap “Uninstall” to remove the app.<br/>
                    <font-awesome-icon class="icon depth-01" :icon="['fal', 'genderless']"/>
                    Reinstall Kitkit School by carefully following all the steps in the installation guide.
                </p>
            </div>
        </div>
        <!-- // FAQ -->

        <!-- Contact Us -->
        <h2 class="title" style="margin-top: 32px;">Contact Us</h2>
        <div class="contactInfo">
            Please send us an email with a description of the issue including any relevant screenshots or videos as helpful, in addition to your account information (your name, your Kitkit School ID, email address, and organization) to <a class="email" href="mailto:kitkitsupport@enuma.com">kitkitsupport@enuma.com</a>
        </div>
        <!-- // Contact Us -->
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: 'support',
        components: {

        },
        data() {
            return {
                activeA1: false,
            }
        },
        computed: {
            ...mapGetters({
                productType : 'getProductType'
            })
        },
        methods : {
            toggleActive(e){
                e.preventDefault();
                // toggle div.qna with 'active' class
                e.target.className === 'question'
                    ? e.target.parentNode.parentNode.classList.toggle('active')
                    : e.target.parentNode.parentNode.parentNode.classList.toggle('active')
            }
        }
    }
</script>

<style>
    .content.support h2.title {
        margin-top: 30px;
        line-height: 1.39;
        font-family: 'Ubuntu-Regular';
    }

    /* Guide Resource */
    .support .resource {
        border-radius: 16px;
        border: solid 1px #c2c2c2;
        background-color: #f9f9f9;
        padding: 50px 10px 20px;
        margin: 0 auto;
    }
    .support .resource .item {
        min-width: 210px;
        text-align: center;
        margin: 0 20px 10px;
    }
    .support .resource .item > a {
        display: block;
        height: 100%;
    }

    .support .resource .item svg {
        color: #0c6290;
        font-size: 80px;
    }
    .support .resource .item .title {
        margin-top: 34px;
        font-size: 24px;
        font-weight: normal;
        line-height: 34px;
        letter-spacing: normal;
        color: #333333;
    }

    /**/
    .support .resource {
        position: relative;
        padding-top: 19px;
        padding-bottom: 26px;
    }
    .support .resource .logo-item {
        position: absolute;
        top: 112px;
        left: 70px;
    }
    .support .resource .logo-item:after {
        position: absolute;
        top: -54px;
        right: -44px;
        content: '';
        width: 1px;
        height: 200px;
        background-color: #d2d2d2;
    }
    .support .resource .list {
        padding-left: 310px;
        margin: 0 auto;
        max-width: 1590px;
    }
    .support .resource .list .item {
        float: left;
        padding-top: 37px;
    }

    @media (max-width: 1881px) {
        .support .resource .logo-item {
            /*top: 221px;*/
            left: 91px;
        }
        .support .resource .list {
            padding-left: 270px;
            max-width: 1020px;
        }
        .support .resource .list .item {
            min-width: 210px;
        }
        .support .resource .logo-item:after {
            right: -74px;
        }
    }

    @media (max-width: 1500px) {
        .support .resource .logo-item:after {
            right: -54px;
        }
    }

    @media (max-width: 1420px) {
        .support .resource .logo-item:after {
            right: -38px;
        }
    }

    @media (max-width: 1341px) {
        .support .resource .logo-item {
            left: 51px;
        }
        .support .resource .list {
            max-width: 890px;
            padding-left: 260px;
        }
        .support .resource .list .item {
            min-width: 160px;
        }
        .support .resource .logo-item:after {
            right: -28px;
        }
    }

    /**/
    /* // Guide Resource */


    /* FAQ */
    .support .sub-title {
      font-size: 50px;

    }
    .support .sub-title a{
      vertical-align: middle;
      margin-left: 10px;

    }
    .support .sub-title .fa-youtube {
      vertical-align: middle;
    }


    .support .faq .subtitle {
        font-size: 32px;
        line-height: 39px;
        font-weight: 900;
        letter-spacing: normal;
        color: #333333;
        margin-top: 50px;
        padding-bottom: 20px;
    }
    .support .faq .subtitle .icon {
        margin-right: 10px;
    }
    .support .faq .qna {
        padding: 0 20px 0 40px;
        font-size: 24px;
        font-weight: bold;
    }
    .support .faq .qna .question {
        position: relative;
        border-top: 1px solid #dedede;
        padding: 22px 0 19px;
    }
    .support .faq .qna > a {
        display: block;
        width: 100%;
        height: 100%;
        color: #333333;
    }
    .support .faq .qna.active > a {
        color: #f6921e;
    }
    .support .faq .qna .question .icon {
        position: absolute;
        top: 24px;
        left: 0;
    }
    .support .faq .qna .question .icon.closed {
        display: inline;
    }
    .support .faq .qna .question .icon {
        display: none;
    }
    .support .faq .qna.active .question .icon.closed {
        display: none;
    }
    .support .faq .qna.active .question .icon.open {
        display: inline;
    }
    .support .faq .qna .question .text {
        margin-left: 34px;
    }
    .support .faq .qna .answer {
        margin-left: 34px;
        padding: 12px 0 18px;
        line-height: 50px;
        display: none;
        font-size: 20px;
        font-weight: 300;
    }
    .support .faq .qna .answer.last {
        padding-bottom: 6px;
    }
    .support .faq .qna .answer .depth-01 {
        margin-right: 5px;
        font-size: 16px;
    }
    .support .faq .qna .answer .depth-02 {
        padding-left: 20px;
        font-size: 20px;
        letter-spacing: -1px;
        display: inline-block;
        width: 36px;
        text-align: right;
        margin-right: 5px;
    }
    .support .faq .qna .answer .depth-03 {
        position: relative;
        padding-left: 40px;
        padding-right: 15px;
    }
    .support .faq .qna .answer .depth-03:before {
        content: '';
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 3px;
        background-color: #333;
        top: 10px;
        letter-spacing: 0;
    }
    .support .faq .qna.active .answer {
        display: block;
    }
    /* // FAQ */



    /* Contact */
    .support .contactInfo {
        padding: 20px 37px 80px 60px;
        color: #666;
        font-size: 24px;
        line-height: 36px;
        font-weight: normal;
    }
    .email {
        color: #0c6290;
        text-decoration: underline;
    }
    .email:hover {
        color: #0c6290;
        text-decoration: underline;
    }
    /* // Contact */


    /*@media (max-width: 1879px) {*/
    /*    .support .resource {*/
    /*        padding-bottom: 30px;*/
    /*    }*/
    /*    .support .resource .group:last-child {*/
    /*        margin-top: 80px;*/
    /*    }*/
    /*}*/
</style>
