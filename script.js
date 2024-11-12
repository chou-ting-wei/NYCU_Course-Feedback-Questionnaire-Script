// allow pasting

const selectionRules = {
    "option_1_1_1": "5",
    "option_1_1_2": "5",
    "option_1_1_3": "5",
    "option_1_1_4": "5",
    "option_1_1_5": "5",
    "option_1_1_6": "5",
    "option_1_1_7": "5",
    "option_1_1_8": "5",
    "option_2_1_1": "1",
    "option_2_1_2": "1",
    "option_2_1_3": "1",
    "option_2_1_4": "1",
    "option_2_1_5": "2",
    "option_2_1_6": "1"
};

Object.keys(selectionRules).forEach(optionName => {
    const radio = document.querySelector(`input[type="radio"][name="${optionName}"][value="${selectionRules[optionName]}"]`);
    if (radio) {
        radio.checked = true;
        radio.dispatchEvent(new Event('change'));
    }
});

const checkboxRules = {
    "option_2_1_6_0": "1",
    "option_2_1_6_1": "1",
    "option_2_1_6_2": "1",
    "option_2_1_6_3": "1",
    "option_2_1_6_4": "1",
    "option_2_1_6_5": "1",
    "option_2_1_6_6": "1",
    "option_2_1_6_7": "1",
    "option_2_1_6_8": "1",
    "option_2_1_6_9": "1",
    "option_2_1_6_10": "1",
    "option_2_1_6_11": "1",
    "option_2_1_6_12": "1"
};

Object.keys(checkboxRules).forEach(checkboxId => {
    const checkbox = document.getElementById(checkboxId);
    if (checkbox) {
        checkbox.checked = true;
        checkbox.dispatchEvent(new Event('change'));
    }
});

const textareaRules = [
    "這門課程讓我學到了不少新知識，也讓我更了解相關領域的應，內容還蠻有趣的，讓我保持學習的動力。",
    "在服務實作中，讓我印象最深刻的是與團隊一起解決問題的過程。雖然遇到不少挑戰，但每次成功克服後，成就感十足，也更體會到團隊合作的重要性。"
];

document.querySelectorAll('textarea').forEach((textarea, index) => {
    if (index < textareaRules.length) {
        textarea.value = textareaRules[index];
        textarea.dispatchEvent(new Event('input'));
    }
});

const sendButton = document.querySelector('button[type="button"][data-v-7fe871a7]');

if (sendButton) {
    sendButton.click();
    console.log("問卷已成功提交");
} else {
    console.log("找不到提交按鈕");
}