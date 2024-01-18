$(document).ready(function () {

    function make_request(url, success, failed) {

        $.ajax({
            url: url,
            success: function (data) {
                if (typeof success === 'function') {
                    success(data);
                }
            },
            error: function (error) {
                if (typeof failed === 'function') {
                    failed(error);
                }
            }
        });
    }

    function search_suggestions() {

        var $t = $(this);
        var $results = $('#search-results');

        $t.attr('disabled', true);

        make_request(
            '/search?q=' + $(document).find('.js-search-term').val(),
            function (results) {

                $results.html('');

                $.each(results, function (category, items) {

                    var childrens = document.createElement('div');

                    $(childrens).append(
                        $(document.createElement('strong'))
                            .text(category)
                    );

                    $.each(items, function (k, i) {

                        $(childrens).append(
                            $(document.createElement('a'))
                                .text(i.title)
                                .attr('href', i.url)
                        )
                    });

                    $results.append(childrens);
                });

                $t.attr('disabled', false);
            },
            function (error) {
                $t.attr('disabled', false);
                $results.html('').text(error);
            }
        );

        return false;
    }

    $(document).on('click', '.js-search-action', search_suggestions);
});