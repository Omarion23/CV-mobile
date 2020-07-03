function show(value) {

    id = value.id;

    document.getElementById(id + "_modal").style.display = "flex";

  }

  function hide(value) {

    id = value.id;

    $('#'+id+'_modal').fadeOut(400);

  }