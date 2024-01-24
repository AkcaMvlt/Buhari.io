$jq(function() {
    $jq('#vip').on('change', function() {
        var selected = $jq(this).find('option:selected');
        option1 = selected.data('first');
        option2 = selected.data('second');

        $jq('#first').html(option1);
        $jq('#second').html(option2);
    });
});