if (Meteor.isClient) {
    Template.hello.onRendered(function () {
        d3.json('/data/brief-1.json', function (data) {
            data = MG.convert.date(data, 'date');
            MG.data_graphic({
                title: "Linked Graphic",
                description: "The two graphics in this section are linked together. A rollover in one causes a rollover in the other.",
                data: data,
                linked: true,
                width: 600,
                height: 200,
                right: 40,
                xax_count: 4,
                target: '#briefing-1'
            });
        });
    });
}
