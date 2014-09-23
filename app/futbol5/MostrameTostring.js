var Cancha = require('../entidades/cancha.js');
var Equipo = require('../entidades/equipo.js');
var Jugador = require('../entidades/jugador.js');
var MostrameTostring=(function(){
    var self=Object.create({});

     
      var lista=[];
	 
        self.listado=function(){
          var e=null;
              c=null;
              j=null;
            // if(lista.length){
                 // return lista;
            // };
    
                 for (i=0;i<50;i++){

                     c=new Cancha();
                     e=new Equipo();
                     j=new Jugador();
                     c.setNombre('Cancha '+i);
                     e.setNombre('Equipo '+i);
                     j.setNombre('Jugador '+i);
                     lista.push(c);
					 lista.push(e);
					 lista.push(j);
                    };
   
                     return lista;
					 
                
         };

     return self;
});
module.exports=MostrameTostring;
