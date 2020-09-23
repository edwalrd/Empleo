const Puesto = require("../model/puesto");
const validator = require("validator");



const puestoController = {


  getPuestos: (req, res) => {

    Puesto.find({}).exec((err, puesto) => {

      if (err) {

        return res.status(400).send({

          status: "error",
          mensaje: "se ha producido un error" + err
        })
      }

      if (!puesto) {

        return res.status(404).send({

          status: 'error',
          mensaje: 'error no ahi puesto para mostrar'

        });
      }

      return res.status(200).send({

        status: "200",
        puesto
      })

    });
  },

  getOnePuesto: (req, res) => {

    const { id } = req.params;

    if (!id || id == null) {
      return res.status(500).send({
        message: "Error",
      });
    }

    Puesto.findById(id, (error, puesto) => {

      if (error || !puesto) {

        return res.status(500).send({

          message: "Error"
        })
      }

      return res.status(200).send({

        status: "OK",
        puesto
      })
    })

  },

  createPuestos: (req, res) => {

    const params = req.body;

    try {

      var validationUbicacion = !validator.isEmpty(params.empresa);
      var validationPosicion = !validator.isEmpty(params.actividad);
      var validationHorario = !validator.isEmpty(params.horario);
      var validationNombre = !validator.isEmpty(params.nombre);
      var validationDescripcion = !validator.isEmpty(params.descripcion);
      var validationRequisito = !validator.isEmpty(params.requisito);
      var validationExperiencial = !validator.isEmpty(params.experiencia);
      var validationSexo = !validator.isEmpty(params.sexo);
      var validationContrato = !validator.isEmpty(params.contrato);
      var validationJornada = !validator.isEmpty(params.jornada);
      var validationHorarioT = !validator.isEmpty(params.horarioT);



    } catch (error) {

      return res.status(400).send({
        status: "error",
        message: "Faltan datos por enviar"
      });
    }

    if (validationUbicacion && validationPosicion && validationHorario && validationNombre && validationDescripcion &&
      validationRequisito && validationExperiencial && validationSexo && validationContrato && validationJornada && validationHorarioT == true) {


      Puesto.create(params, (error, puesto) => {
        if (error || !puesto) {

          return res.status(500).send({
            mesanje: 'el puesto no se a guardado',
            error
          })
        }

        return res.status(202).send({

          status: "OK",
          puesto
        })
      })
    }

    else {
      return res.status(404).send({
        msg: 'Los datos no son validos'
      });
    }
  },


  updatePuesto: (req, res) => {
    const { id } = req.params;
    const params = req.body;

    Puesto.findOneAndUpdate({ _id: id }, params, { new: true }, (error, puesto) => {
      if (error || !puesto) {
        return res.status(500).send({
          message: "Error"
        });
      }
      return res.status(202).send({
        puesto: puesto
      })
    });

  },

  deletePuesto: (req, res) => {
    const { id } = req.params;
    if (!id || id == null) {
      return res.status(500).send({
        message: "Error",
      });
    }

    Puesto.findByIdAndDelete(id, (error, puesto) => {
      if (error || !puesto) {
        return res.status(500).send({
          message: "Error"
        });
      }
      return res.status(202).send({
        puesto: puesto
      })
    })

  },

  busquedaPuesto: (req, res) => {

    let search = req.params.search;

    if (search) {

      const regx = new RegExp(search, 'i');

      Puesto.find({
        "$or": [

          { nombre: regx },
          { sexo: regx }

        ]

      }).exec((err, puesto) => {

        if (err) {

          return res.status(200).send({
            status: "Error",
            mensaje: "Se ha producido un error" + err
          });

        }
        if (!puesto || puesto.length <= 0) {

          return res.status(404).send({

            status: "404",
            mensaje: "No se han encontrado resultados. Por favor, modifica tu búsqueda."

          });
        }

        return res.status(200).send({
          status: "Ok",
          puesto

        });

      })
    }

    
  },
};

module.exports = puestoController;
