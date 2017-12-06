$(document).ready(function(){

    // Fonction pour ajouter du contenu dans le MAIN
    function appendTodo(item){
        var myBtn;
        if(item.isDone == false){
            myBtn = '<button class="finishTodo" data-todo-id="'+ item.id+'">Valider la tâche</button>';

        } else{
            myBtn = '<button class="eraseTodo" data-todo-id="'+ item.id+'">Supprimer la tâche</button>';
        }

        $('main').append(''+
            '<section>'+
                '<p>'+ item.title +'</p>'+
                myBtn+
            '</section>'
        )
    }

    // Fonction pour supprimer une tâche
    function eraseTodo(){
        
        $('.eraseTodo').click(function(){
            var myTodo = $(this).parent()

            $.ajax({
                url: 'http://localhost:8080/api/todo/' + $(this).attr('data-todo-id'),
                dataType: 'JSON',

                success: function(data){
                    console.log(data);
                    console.log($(this))
                },
                error: function(err){
                    console.log(err);
                },
                complete: function(){
                    myTodo.fadeOut();
                }
            })
        })
    }
    
    // Fonction pour afficher la liste des tâches
    function getAllTodoes(){

        $.ajax({
            url: 'http://localhost:8080/api/todoes',
            dataType: 'JSON',
            type: 'GET',

            success: function(data){
                console.log(data);
                for(var i = 0; i < data.length; i++){
                    appendTodo(data[i])
                }
            },
            error: function(err){
                console.log(err);
            },
            complete: function(){
                eraseTodo()
            }
        })
    }

    getAllTodoes();

})