let users = [];
function getDataUsers() {
    $.ajax({
        url: "http://localhost:3000/items",
        success: function (data) {
            users = data;
            console.log(users)
            render(data)
        }
    });
}
getDataUsers()
function render(data) {
    let content = '';
    for (let i = 0; i < data.length; i++) {
        const user = data[i];
        content += `
				<tr>
					<td>
						<img src="${user.profile_image}"/>
					</td>
					<td>
						<a href="${user.link}" title="${user.link}">${user.display_name}</a>
					</td>
                    <td>
						<a>${user.reputation}</a>
					</td>
                    <td>
						<a href="${user.website_url}">${user.website_url}</a>
					</td>
                    <td>
						${convertTime(user.creation_date)}
					</td>
				</tr>
				`
        $('#tbody').html(content)
    }
}

function convertTime(unixTimeStamp) {
    const dateTime = new Date(unixTimeStamp * 1000);
    return dateTime.toLocaleString('vi');
}


// function sort(th) {
//     let asc = $('.up');
//     let desc = $('.down');
//         asc.css('opacity', '0.3')
//         desc.css('opacity', '0.3');


//     thElement = $(th);

//     let name = thElement.attr('data-name')
//     let oder = thElement.attr('data-oder');


//     switch (oder) {
//         case '0':
//                 // $(th).addClass('red')
//             thElement.attr('data-oder', '1');
//             thElement.find('.up').css('opacity', '1')
//             thElement.find('.down').css('opacity', '0.3')
//             if (name === 'display_name') {
//                 users.sort((a, b) => {
//                     return a.display_name.localeCompare(b.display_name)
//                 })
//             }
//             else if (name === 'reputation') {
//                 users.sort((a, b) => {
//                     return a.reputation - b.reputation
//                 })
//             }
//             else if (name === 'website_url') {
//                 users.sort((a, b) => {
//                     return a.website_url.localeCompare(b.website_url)
//                 })
//             }
//             else if (name === 'creation_date') {
//                 users.sort((a, b) => {
//                     return a.creation_date - b.creation_date
//                 })
//             }

//             render(users);
//             break;
//         case '1':
//                 // $(th).addClass('blue')
//             thElement.attr('data-oder', '0');
//             thElement.find('.up').css('opacity', '0.3')
//             thElement.find('.down').css('opacity', '1');
//             if (name === 'display_name') {
//                 users.sort((a, b) => {
//                     return b.display_name.localeCompare(a.display_name)
//                 })
//             }
//             else if (name === 'reputation') {
//                 users.sort((a, b) => {
//                     return b.reputation - a.reputation
//                 })
//             }
//             else if (name === 'website_url') {
//                 users.sort((a, b) => {
//                     return b.website_url.localeCompare(a.website_url)
//                 })
//             }
//             else if (name === 'creation_date') {
//                 users.sort((a, b) => {
//                     return b.creation_date - a.creation_date
//                 })
//             }
//             render(users);
//             break;
//     }

// }



function sort(th) {
    let thitem = $(th);
    let name = thitem.attr('data-name');
    let oder = thitem.attr('data-oder');
    $('.up').css('opacity', '0.3')
    $('.down').css('opacity', '0.3')
    switch (oder) {
        case '0':
                thitem.attr('data-oder','1')
                $('.up').css('opacity', '1');
                $('.down').css('opacity', '0.3')
            if (name === 'display_name') {
                users.sort((a, b) => { return a.display_name.localeCompare(b.display_name) })
            }
            render(users);
            break;
        case '1':
                thitem.attr('data-oder','0')
                $('.up').css('opacity', '0.3');
                $('.down').css('opacity', '1')
            if (name === 'display_name') {
                users.sort((a, b) => { return b.display_name.localeCompare(a.display_name) })
            }
            render(users);
            break
    }
}
