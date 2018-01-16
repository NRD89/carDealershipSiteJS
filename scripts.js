

$(document).ready(function() {
  var data = {};
  data.d = [{Make: 'Audi', Model: 'A8', Year: '2017', Color: 'Black', Price: '82500', PriceTax: '82500'},
            {Make: 'Subaru', Model: 'BRZ', Year: '2017', Color: 'Black', Price: '25495', PriceTax: '25490'},
            {Make: 'Ferrari', Model: '488 Spider', Year: '2017', Color: 'Red', Price: '272700', PriceTax: '272700'},
            {Make: 'Volkswagen', Model: 'GTI', Year: '2013', Color: 'White', Price: '13500', PriceTax: '13500'},
            {Make: 'Subaru', Model: 'WRX STI', Year: '2017', Color: 'Pearl White', Price: '35195', PriceTax: '35195'}];


  $('#thetable tr').not(':first').remove();
  var html = '';
  for(var i = 0; i < data.d.length; i++)
              html += '<tr><td>' + data.d[i].Make + '</td><td>' + data.d[i].Model + '</td><td>' + data.d[i].Year + '</td><td>' + data.d[i].Color + '</td><td>' + '$' + data.d[i].Price + '</td><td>' + '$' +  data.d[i].PriceTax*.08 + '</td></tr>';
  $('#thetable tr').first().after(html);

$(document).ready(function(){
    $("#myInput").keyup(function(){

        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0;

        // Loop through the comment list
        $("table tr").not("#t-head").each(function(){

            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();

            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                count++;
            }
        });

        // Update the count
        var numberItems = count;
        $("#filter-count").text("Number of Comments = "+count);
    });
});

});
