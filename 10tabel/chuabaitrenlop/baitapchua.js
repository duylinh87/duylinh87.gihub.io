let users = [];

function getDataUsers() {
    $.ajax({
        url: "http://localhost:3000/items",
        success: function (data) {
            console.log(data);
            users = data;
            renderContent(data);
        }
    });
}
//get datas
getDataUsers();

function renderContent(data) {
    let content = '';

    for (let i = 0; i < data.length; i++) {
        const user = data[i];

        //es6 template String
        content += `
			<tr>
				<td>
					<a href="${user.link}">
						<img src="${user.profile_image}" alt="${user.profile_image}"/>
					</a>
				</td>
				<td id="display_name">
					<a href="${user.link}">${user.display_name}</a>
				</td>
				<td id="reputation">
					${user.reputation}
				</td>
				<td>
					<a href="${user.website_url}">${user.website_url}</a>
				</td>
				<td id="creation_date">
					${convertTime(user.creation_date)}
				</td>
			</tr>
			`
    }
    $('#users').html(content);
}

function convertTime(unixTimeStamp) {
    const dateTime = new Date(unixTimeStamp * 1000);
    return dateTime.toLocaleString('vi');
}

function sort(th) {
    let  thElement = $(th)
    let asc = $('.asc');
    let desc = $('.desc');
    let name = thElement.attr('data-name');
    let oder = thElement.attr('data-oder');
    asc.css('opacity', '0.3');
    desc.css('opacity', '0.3');

    switch (oder) {
        case '0':
            thElement.attr('data-order', '1')
            thElement.find('desc').css('opacity', '1')
            if (name === ' display_name') {
                users.sort(function (a, b) {
                    return a.display_name.localeCompare(b.display_name)
                })
            } else if (name === 'user_id') {
                users.sort(function (a, b) {
                    return a.user_id - b.user_id
                })
            } else if (name === ' creation_date') {
                users.sort(function (a, b) {
                    return a.creation_date - b.creation_date
                })
            }
            case '1':
                    thElement.attr('data-order', '1')
                    thElement.find('desc').css('opacity', '1')
                    if (name === ' display_name') {
                        users.sort(function (a, b) {
                            return a.display_name.localeCompare(b.display_name)
                        })
                    } else if (name === 'user_id') {
                        users.sort(function (a, b) {
                            return a.user_id - b.user_id
                        })
                    } else if (name === ' creation_date') {
                        users.sort(function (a, b) {
                            return a.creation_date - b.creation_date
                        })
                    }
            render(users)

    }

}
