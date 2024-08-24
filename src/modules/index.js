document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");
    let selectedRadio = null;

    boxes.forEach(box => {
        box.addEventListener("click", function() {
            const content = this.querySelector(".content");
            const isExpanded = content.style.display === "block";
            const radioButton = this.querySelector("input[type='radio']");
            const discountDiv = this.querySelector("#discount");
            const offerDiv = this.querySelector("#offer");
            const extraText = this.querySelector(".extra-text");
            const sectionLabel = this.querySelector(".sectionLabel");
            const divider = this.querySelector('.divider');

            if (isExpanded) {
                // Collapse box
                content.style.display = "none";
                this.style.maxHeight = "150px"; 
                this.style.borderColor = "#ccc";
                this.style.padding = 0;
                radioButton.checked = false; 
                discountDiv.style.display = "block"; // Show discount div
                offerDiv.style.justifyContent = "center"; // Center offer text
                extraText.style.display = "none"; // Hide extra text
                sectionLabel.style.padding = 0;
                divider.style.display = "flex";
            } else {
                // Expand box
                content.style.display = "block";
                this.style.maxHeight = "350px";
                this.style.borderColor = "#FF6B82";
                this.style.padding = "8px";
                radioButton.checked = true;
                discountDiv.style.display = "none"; // Hide discount div
                offerDiv.style.justifyContent = "flex-start"; // Align offer text to the left
                extraText.style.display = "flex"; // Show extra text
                sectionLabel.style.paddingLeft = "30px";
                divider.style.display = "none";
            }

            if (selectedRadio && selectedRadio !== radioButton) {
                selectedRadio.checked = false;
            }

            selectedRadio = radioButton.checked ? radioButton : null;

            // Collapse other boxes
            boxes.forEach(otherBox => {
                if (otherBox !== this) {
                    otherBox.querySelector(".content").style.display = "none";
                    otherBox.style.maxHeight = "150px";
                    otherBox.style.borderColor = "#ccc";
                    otherBox.style.padding = 0;
                    otherBox.querySelector("#discount").style.display = "block"; // Show discount div for other boxes
                    otherBox.querySelector("#offer").style.justifyContent = "center"; // Center offer text for other boxes
                    otherBox.querySelector(".extra-text").style.display = "none"; // Hide extra text for other boxes
                    otherBox.querySelector(".sectionLabel").style.padding = 0;
                    otherBox.querySelector(".divider").style.display = "flex";
                }
            });
        });
    });
});
