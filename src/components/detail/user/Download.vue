<template>
    <div class="content">
        <TermCheck>
        <!-- Download Guide -->
        <ul class="guide">

            <!-- 1. -->
            <li class="precedence">
                <div class="summary">
                    <div class="num">1.</div>
                    <div class="text">Prepare a computer and a tablet device and check the minimum device specification.</div>
                </div>
                <div class="detail">
                    <ul class="list">
                        <li class="item">First step is to prepare a computer to download the install package and a tablet device to install Kitkit School.</li>
                        <li class="item">Download the install package to your computer and move the files to tablet devices to install.</li>
                        <li class="item">If you are installing Kitkit School to multiple devices, using an SD card is more efficient.</li>
                        <li class="item" style="margin: 30px 0;">Kitkit School works on Android tablet devices. Below are the minimum specification requirements for the tablets:
                            <p class="spec">
                                - Supported OS version: <span class="yale">Android 6.0 - Android 9.0</span><br/>
                                - Storage: <span class="yale">16GB</span> with <span class="yale">6GB</span> available space<br/>
                                - RAM: <span class="yale">2.0GB (minimum 1.7GB)</span>
                            </p>
                        </li>
                        <li class="item">You can check your device spec in the Settings app, under About Tablet and Storage menu.</li>
                    </ul>
                </div>
            </li>
            <!-- // 1. -->

            <!-- 2. -->
            <li>
                <div class="summary">
                    <div class="num">2.</div>
                    <div class="text">Watch and read the installation guides below.</div>
                </div>
                <div class="detail">
                    <!-- English -->
                    <div v-if="productType === 1" class="visualGuide row">
                        <div class="item col">
                            <a href="https://youtu.be/LbS90kiYcaU" target="_blank">
                                <font-awesome-icon :icon="['fab', 'youtube']"/>
                                <p class="title">English<br/>Installation<br/><b>Guide Video</b></p>
                            </a>
                        </div>
                        <div class="item col">
                            <a href="https://web.kitkitschool.com/Download/Guide/Kitkit_School_Installation_Guide_EN.pdf" target="_blank" download>
                                <font-awesome-icon :icon="['far', 'download']"/>
                                <p class="title">English<br/>Installation<br/><b>Guide (PDF)</b></p>
                            </a>
                        </div>
                    </div>
                    <!-- // English -->

                    <!-- Swahili -->
                    <div v-if="productType === 2" class="visualGuide row swahili">
<!--                        <div class="col item">-->
<!--                            <img class="logo logo-swh attachment-full size-full" src="../../../assets/img/common/logo_Swahili.png" height="71" width="200" alt="kitkit swahili text logo"/>-->
<!--                        </div>-->
                        <div class="item col item-01">
                            <a href="https://youtu.be/LbS90kiYcaU" target="_blank">
                                <font-awesome-icon :icon="['fab', 'youtube']"/>
                                <p class="title">English<br/>Installation<br/><b>Guide Video</b></p>
                            </a>
                        </div>
                        <div class="item col item-02">
                            <a href="https://web.kitkitschool.com/Download/Guide/Kitkit_School_Installation_Guide_EN.pdf" target="_blank" download>
                                <font-awesome-icon :icon="['far', 'download']"/>
                                <p class="title">English<br/>Installation<br/><b>Guide (PDF)</b></p>
                            </a>
                        </div>
                        <div class="item col item-03">
                            <a href="https://youtu.be/PjkQTNkNHTU" target="_blank">
                                <font-awesome-icon :icon="['fab', 'youtube']"/>
                                <p class="title">Swahili<br/>Installation<br/><b>Guide Video</b></p>
                            </a>
                        </div>
                        <div class="item col item-04">
                            <a href="https://web.kitkitschool.com/Download/Guide/Kitkit_School_Installation_Guide_Swahili.pdf" target="_blank" download>
                                <font-awesome-icon :icon="['far', 'download']"/>
                                <p class="title">Swahili<br/>Installation<br/><b>Guide (PDF)</b></p>
                            </a>
                        </div>
                    </div>
                    <!-- // Swahili -->

                </div>
            </li>
            <!-- // 2. -->

            <!-- 3. -->
            <li class="packageList">
                <div class="summary">
                    <div class="num">3.</div>
                    <div class="text">Download the install package (all files) to your computer.</div>
                </div>
                <div class="detail">
                    <div>
                        <div class="header">
                            <img width="116" height="62" src="https://kitkitschool.com/wp-content/uploads/2019/08/cropped-kitkitlogo_eng.png" class="logo attachment-full size-full" rcset="https://kitkitschool.com/wp-content/uploads/2019/08/cropped-kitkitlogo_eng.png 500w, https://kitkitschool.com/wp-content/uploads/2019/08/cropped-kitkitlogo_eng-300x156.png 300w" sizes="(max-width: 500px) 100vw, 500px" alt="kitkit school logo"/>

                            <h2 v-if="productType===1" class="title">English & Math</h2>
                            <h2 v-if="productType===2" class="title">Swahili & Math</h2>

                        </div>

                        <!-- English -->
                        <div v-if="productType === 1" class="packages">
                            <div class="all">
                                <a href="https://web.kitkitschool.com/Download/Installer/English_and_Math/Kitkitschool_EN_1.6.3.zip" download class="btn btn-primary btn-lg">
                                    Download All <b style="color:#5a3428; margin-left: 8px; font-family: 'Lato-Regular'">2.24GB</b>
                                </a>
                            </div>
                            <ul class="list">
                                <li class="item">
                                    <span>Kitkit School Installer : <b>7MB</b></span>
                                    <a href="https://web.kitkitschool.com/Download/Installer/English_and_Math/Kitkit_Installer_EN_1.6.3.apk" download class="btn btn-primary">Download</a>
                                </li>
                                <li class="item">
                                    <span>Kitkit School Learning App : <b>849.7MB</b></span>
                                    <a href="https://web.kitkitschool.com/Download/Installer/English_and_Math/Kitkit_Learning_App_EN_1.6.3.apk" download class="btn btn-primary">Download</a>
                                </li>
                                <li class="item">
                                    <span>Book Viewer : <b>30.7MB</b></span>
                                    <a href="https://web.kitkitschool.com/Download/Installer/English_and_Math/Kitkit_Book_Viewer_EN_1.6.3.apk" download class="btn btn-primary">Download</a>
                                </li>
                                <li class="item">
                                    <span>Book Data : <b>1.42GB</b></span>
                                    <a href="https://web.kitkitschool.com/Download/Installer/English_and_Math/Kitkit_Book_Data_EN_1.6.3.apk" download class="btn btn-primary">Download</a>
                                </li>
                                <li class="item">
                                    <span>Kitkit School : <b>32.2MB</b></span>
                                    <a href="https://web.kitkitschool.com/Download/Installer/English_and_Math/Kitkit_School_EN_1.6.3.apk" download class="btn btn-primary">Download</a>
                                </li>
                            </ul>
                        </div>

                        <!-- Swahili -->
                        <div v-if="productType === 2" class="packages">
                            <div class="all">
                                <a href="https://web.kitkitschool.com/Download/Installer/Swahili_and_Math/Kitkitschool_SW_1.6.3.zip" download class="btn btn-primary btn-lg">
                                    Download All <b style="color:#5a3428; margin-left: 8px; font-family: 'Lato-Regular'">2.27GB</b>
                                </a>
                            </div>
                            <ul class="list">
                                <li class="item">
                                    <span>Kitkit School Installer : <b>7MB</b></span>
                                    <a href="https://web.kitkitschool.com/Download/Installer/Swahili_and_Math/Kitkit_Installer_SW_1.6.3.apk" download class="btn btn-primary">Download</a>
                                </li>
                                <li class="item">
                                    <span>Kitkit School Learning App : <b>733MB</b></span>
                                    <a href="https://web.kitkitschool.com/Download/Installer/Swahili_and_Math/Kitkit_Learning_App_SW_1.6.3.apk" download class="btn btn-primary">Download</a>
                                </li>
                                <li class="item">
                                    <span>Book Viewer : <b>30.7MB</b></span>
                                    <a href="https://web.kitkitschool.com/Download/Installer/Swahili_and_Math/Kitkit_Book_Viewer_SW_1.6.3.apk" download class="btn btn-primary">Download</a>
                                </li>
                                <li class="item">
                                    <span>Book Data : <b>1.55GB</b></span>
                                    <a href="https://web.kitkitschool.com/Download/Installer/Swahili_and_Math/Kitkit_Book_Data_SW_1.6.3.apk" download class="btn btn-primary">Download</a>
                                </li>
                                <li class="item">
                                    <span>Kitkit School : <b>32.2MB</b></span>
                                    <a href="https://web.kitkitschool.com/Download/Installer/Swahili_and_Math/Kitkit_School_SW_1.6.3.apk" download class="btn btn-primary">Download</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
            <!-- // 3. -->

            <!-- 4. -->
            <li>
                <div class="summary">
                    <div class="num">4.</div>
                    <div class="text">Move the downloaded files from computer to your tablet device and install.</div>
                </div>
                <span style="font-size: 24px; padding-left: 60px;">Please refer to the installation guides for detailed guidance.</span>
            </li>
            <!-- // 4. -->

            <!-- 5. -->
            <li>
                <div class="summary" style="padding-top: 50px;">
                    <div class="num">5.</div>
                    <div class="text">If you have successfully installed Kitkit School, please refer to user guide and video tutorials to start playing Kitkit School.</div>
                </div>
                <div class="detail">

                    <!-- English -->
                    <div v-if="productType === 1" class="visualGuide userGuide row">
                        <div class="item col">
                            <a href="https://youtu.be/wQg50ImGN68" target="_blank">
                                <font-awesome-icon :icon="['fab', 'youtube']"/>
                                <p class="title">English User<br/><b>Guide Video</b></p>
                            </a>
                        </div>
                        <div class="item col">
                            <a href="https://web.kitkitschool.com/Download/Guide/Kitkit_School_User_Guide_EN.pdf" target="_blank" download>
                                <font-awesome-icon :icon="['far', 'download']"/>
                                <p class="title">English User<br/><b>Guide (PDF)</b></p>
                            </a>
                        </div>
                    </div>
                    <!-- // English -->

                    <!-- Swahili -->
                    <div v-if="productType === 2" class="visualGuide userGuide row swahili">
<!--                        <div class="col item">-->
<!--                            <img class="logo logo-swh attachment-full size-full" src="../../../assets/img/common/logo_Swahili.png" height="71" width="200" alt="kitkit swahili text logo"/>-->
<!--                        </div>-->

                        <div class="item col item-01">
                            <a href="https://youtu.be/wQg50ImGN68" target="_blank">
                                <font-awesome-icon :icon="['fab', 'youtube']"/>
                                <p class="title">English User<br/><b>Guide Video</b></p>
                            </a>
                        </div>
                        <div class="item col item-02">
                            <a href="https://web.kitkitschool.com/Download/Guide/Kitkit_School_User_Guide_EN.pdf" target="_blank" download>
                                <font-awesome-icon :icon="['far', 'download']"/>
                                <p class="title">English User<br/><b>Guide (PDF)</b></p>
                            </a>
                        </div>
                        <div class="item col item-03">
                            <a href="https://youtu.be/4hm_ubVkmXg" target="_blank">
                                <font-awesome-icon :icon="['fab', 'youtube']"/>
                                <p class="title">Swahili User<br/><b>Guide Video</b></p>
                            </a>
                        </div>
                        <div class="item col item-04">
                            <a href="https://web.kitkitschool.com/Download/Guide/Kitkit_School_User_Guide_Swahili.pdf" target="_blank" download>
                                <font-awesome-icon :icon="['far', 'download']"/>
                                <p class="title">Swahili User<br/><b>Guide (PDF)</b></p>
                            </a>
                        </div>
                    </div>
                    <!-- // Swahili -->

                </div>
            </li>
            <!-- // 5. -->

            <!-- 6. -->
            <li>
                <div class="summary" style="padding-bottom: 50px;">
                    <div class="num">6.</div>
                    <div class="text">If you have more questions on downloading, installing or using Kitkit School, please see the FAQ on the Support page for more information.</div>
                </div>
            </li>
            <!-- // 6. -->

        </ul>
        </TermCheck>
    </div>
</template>

<script>
    import {mapActions, mapMutations, mapGetters} from 'vuex'
    import TermCheck from "../../popup/TermCheck";

    export default {
        name: 'download',
        components : {
            TermCheck
        },
        created(){
            this.$EventBus.$on('eventTermCheck', () => {
                this.fetchAgreement();
            });
        },
        mounted(){
            if(!this.account.access)this.fetchAccountInfo();
        },
        computed: {
            ...mapGetters({
                account : 'getAccount',
                productType : 'getProductType'
            })
        },
        methods : {
            ...mapActions({
                postAccountInfo : 'postAccountInfo',
                postAgreement : 'postAgreement'
            }),
            ...mapMutations({
                setAgreement : 'setAgreement'
            }),
            fetchAccountInfo(){
                this.postAccountInfo()
                    .then((data) => {
                        console.log(`postAccountInfoResult : ${data.result}`);
                    })
            },
            fetchAgreement(){
                this.postAgreement()
                    .then((data) => {
                        console.log(`postAgreementResult : ${data.result}`);
                        this.setAgreement(!data.result);
                    })
            }
        },
        beforeDestroy () {
            this.$EventBus.$off('eventTermCheck')
        }
    }
</script>

<style>
    .content .guide {
        padding-top: 30px;
        padding-left: 0;
    }
    .content .guide .yale {
        font-weight: bold;
    }



    /* Summary */
    .content .guide .summary {
        padding-top: 20px;
        margin-bottom: 30px;
        font-size: 36px;
        font-weight: bold;
        font-family: Ubuntu-Regular;
    }
    .content .guide .summary:first-child {
        padding-top: 0;
    }
    .content .guide .summary .num {
        position: absolute;
        line-height: 1.39;
    }
    .content .guide .summary .text {
        line-height: 1.39;
        margin-left: 43px;
    }
    /* // Summary */



    /* Detail */
    .content .guide .detail {
        margin-bottom: 30px;
        padding: 30px 40px;
        border: solid 1px #c2c2c2;
        border-radius: 16px;
        background-color: #f9f9f9;

        font-size: 24px;
        font-style: normal;
        line-height: 29px;
        text-align: left;
        color: #333333;
    }

    .content .guide .detail .header {
        text-align: center;
    }
    .content .guide .detail .header .title {
        letter-spacing: -1.3px;
        padding-left: 13px;
        font-family: 'Lato-Regular';
        font-weight: 600;
    }

    .content .guide .detail .list {
        padding: 0;
    }
    .content .guide .detail .list .item {
        position: relative;
        padding-bottom: 12px;
        padding-left: 12px;
    }
    .content .guide .detail .list .item::before {
        content: '';
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 3px;
        background-color: #333;
    }

    .content .guide .precedence .detail .list .item::before {
        top: 12px;
        left: 0;
    }

    .content .guide .packageList .detail .list .item::before {
        top: 21px;
        left: 0;
    }

    .content .guide .detail .item .spec {
        padding-left: 12px;
        padding-top: 12px;
        line-height: 34px;
    }

    .content .guide .detail .visualGuide {
        min-width: 600px;
        width: 600px;
        margin: 0 auto;
        padding: 20px 0;
    }

    .content .guide .detail .visualGuide.userGuide {
        padding: 37px 0;
    }

    .content .guide .detail .visualGuide .item {
        width: 240px;
        max-width: 240px;
        margin: 0 60px;
        text-align: center;
    }

    .content .guide .detail .visualGuide .item:first-child {
        margin-left: 0;
    }

    .content .guide .detail .visualGuide .item:last-child {
        margin-right: 0;
    }

    @media (max-width: 1420px) {
        .content .guide .detail .visualGuide {
            min-width: 720px;
        }

        .content .guide .detail .visualGuide .item.col {
            min-width: 170px;
            width: 170px;
        }
        .content .guide .detail .visualGuide .item:first-child {
            margin: 0 60px 0 100px;
        }
        .content .guide .detail .visualGuide .item:last-child {
            margin: 0 100px 0 60px;
        }
    }

    .content .guide .detail .visualGuide .item .logo-eng {
        margin-top: 58px;
    }

    .content .guide .detail .visualGuide .item .logo-swh {
        margin-top: 65px;
    }

    .content .guide .detail .visualGuide .item > a {
        display: block;
        width: 100%;
        height: 100%;
    }

    .content .guide .detail .visualGuide .item svg {
        color: #0c6290;
        font-size: 80px;
    }
    .content .guide .detail .visualGuide .item .title {
        margin-top: 34px;
        font-size: 24px;
        font-weight: normal;
        line-height: 34px;
        letter-spacing: normal;
        color: #333333;
    }




    /**/

    .content .guide .detail .visualGuide.swahili {
        min-width: 1320px;
        width: 1320px;
    }

    @media (max-width: 1680px) {
        .content .guide .detail .visualGuide.swahili {
            min-width: 1120px;
            width: 1120px;
        }
        .content .guide .detail .visualGuide.swahili .item {
            margin: 0 20px;
        }
    }

    @media (max-width: 1440px) {
        .content .guide .detail .visualGuide.swahili {
            min-width: 720px;
            width: 720px;
        }

        .content .guide .detail .visualGuide.swahili .item.item-01 {
            margin: 0 60px 0 100px;
        }

        .content .guide .detail .visualGuide.swahili .item.item-02 {
            margin: 0 100px 0 60px;
        }

        .content .guide .detail .visualGuide.swahili .item.item-03 {
            margin: 50px 60px 0 100px;
        }

        .content .guide .detail .visualGuide.swahili .item.item-04 {
            margin: 50px 100px 0 60px;
        }
    }

    /**/





    .content .guide .detail .packages {
        width: 740px;
        margin: 0 auto;
        border-radius: 10px;
        border: solid 1px #707070;
        background-color: #f2f2f2;
    }
    .content .guide .detail .packages .all {
        background-color: #fff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding: 30px 200px;
        border-bottom: 1px solid #707070;
    }
    .content .guide .detail .packages .all .btn {
        width: 340px;
        height: 60px;
        font-size: 24px;
        line-height: 41px;
    }
    .content .guide .detail .packages .list {
        padding: 20px 50px 50px;
    }
    .content .guide .detail .packages .list .item {
        margin-top: 20px;
        height: 45px;
        padding-top: 9px;
        padding-bottom: 7px;
    }
    .content .guide .detail .packages .list .item span {
        line-height: 29px;
    }
    .content .guide .detail .packages .list .item b {
        color: #0c6290;
    }
    .content .guide .detail .packages .list .item .btn {
        position: absolute;
        right: 0;
        top: 0;
        width: 160px;
        height: 45px;
        line-height: 30px;
        font-size: 20px;
        font-family: 'Lato-Regular';
        font-weight: 400;
    }
    /* // Detail */
</style>

