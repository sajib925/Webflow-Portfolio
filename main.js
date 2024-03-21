$(document).ready(function(){

    // api call 

    $.ajax({
        url: "https://fakestoreapi.com/products",
        method: "GET",
        success: function(data) {
            const categories = data.slice(0, 20);
            displayCategories(categories);

            $('#search').on('input', function() {
                const searchText = $(this).val().toLowerCase();
                const filteredCategories = categories.filter(function(category) {
                    return category.title.toLowerCase().includes(searchText);
                });
                displayCategories(filteredCategories);
            });
        }
    });

    // api data show in frontend

    function displayCategories(categories) {
        $(".blog_items").html(categories.map(function(cat) {
        		const des = cat.description.split(' ').slice(0, 10).join(' ');
            const title = cat.title.split(' ').slice(0, 4).join(' ');
            return `
                <div class="blog_item" ${cat.id}>
                    <a href="#" class="blog_link">
                        <div class="blog_image-wrap">
                            <img
                                src="${cat.image}"
                                loading="lazy"
                                alt="blog-image"
                                class="blog_image"
                            />
                        </div>
                        <div class="blog_title-wrap">
                            <h3 class="all-heading-h3 blog-title">
                                ${title}
                            </h3>
                            <p class="text-size-medium">Price: $${cat.price}</p>
                            <p class="portfolio-tag">${cat.category}</p>
                            <div class="text-size-medium">
                                ${des}
                            </div>
                        </div>
                    </a>
                </div>
            `;
        }).join(''));
    }


    // accordina script 

    $(".faq_accordian-button").click(function(){
        const isActive = $(this).parent(".faq-accordian-item").hasClass("accordian-active");
        const isIconActive = $(this).find(".faq_accordian-button-icon").hasClass("accordian-active-icon")    
        const panel = $(this).nextAll(".faq_accordian-pannel")

        $(".faq-accordian-item").removeClass("accordian-active");
        $(".faq_accordian-button-icon").removeClass("accordian-active-icon");

        if (!isIconActive) {
            $(this).find(".faq_accordian-button-icon").addClass("accordian-active-icon");
        }

        if (!isActive) {
            $(this).parent(".faq-accordian-item").addClass("accordian-active");
        }

        
        $(".faq_accordian-pannel").not(panel).slideUp(150);
        panel.slideToggle(150);
    });

    $(document).ready(function() {
        function calculateTotalPayment() {
            const teamSize = parseInt($('#teamSize').val());
            const selectedPlan = parseInt($('#selectedPlan').val());

            const totalPayment = teamSize * selectedPlan;

            $('#totalPayment').text('$' + totalPayment.toFixed(2)); 
        }

        calculateTotalPayment();

        $('#teamSize, #selectedPlan').change(calculateTotalPayment);
    });
});


// social link hover script 

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.social-link-btn');

    buttons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const xPercent = ((x / rect.width) * 100 - 50) * 2 + '%';
            const yPercent = ((y / rect.height) * 100 - 50) + '%';
            const image = button.querySelector('.social-link-btn-icon');
            image.style.setProperty('--x', xPercent);
            image.style.setProperty('--y', yPercent);
        });
    });
});


$("[fs-cmsfilter-element='clear']").addClass("fs-cmsfilter-active");

$(".w-dyn-item").on("click", function () {
    $("[fs-cmsfilter-element='clear']").removeClass("fs-cmsfilter-active");
    $(this).addClass("fs-cmsfilter-active");
});

$("[fs-cmsfilter-element='clear']").on("click", function () {
    $("[fs-cmsfilter-element='clear']").addClass("fs-cmsfilter-active");
});



