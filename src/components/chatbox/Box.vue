<template>
    <div class="t-flex t-flex-col t-w-full t-border-t t-border-grayBorder custom-shadow">
        <input type="text" id="text-box" placeholder="Message to Sophie | Away for one hour"
            class="t-w-full t-text-fgPrimary t-h-[52px] t-p-5 t-border-b t-border-grayBorder focus-visible:t-outline-gray-300">
        <div class="t-flex t-justify-between t-h-[40px] t-pl-6 t-pr-4 t-py-2">
            <div class="t-flex t-items-center t-gap-x-2">
                <img src="../../../public/text-bold.svg" />
                <img src="../../../public/text-italic.svg" />
                <img src="../../../public/text-strikethrough.svg" />
                <img src="../../../public/text-clear.svg" />
                <img src="../../../public/emoji.svg" />
                <img src="../../../public/link.svg" />
                <img src="../../../public/menu.svg" />
                <img src="../../../public/video.svg" />
            </div>
            <div class="t-flex t-gap-x-2">
                <img src="../../../public/cards.svg" />
                <div class="t-mt-0.5">
                    <span class="t-h-5 t-w-5 t-rounded-3xl t-bg-primaryGray t-text-white t-text-base t-font-bold t-flex t-justify-center t-items-center t-pb-0.5">+</span>
                </div>
            </div>
        </div>
    </div>
</template>