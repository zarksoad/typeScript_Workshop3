interface Medicamentos {
    id:number,
    nombre:string,
    cantidad:number,
    fechaCaducidad:Date,
    precio:number
}

class Inventario {
    private static medicamentos:Medicamentos[] = []

    static agregar(medicamentos:Medicamentos){
        this.medicamentos.push(medicamentos)
        console.log(`Medicamento ${medicamentos.nombre} agregado exitosamente `)
    }
    static actualizar(id:number,datosActualizados:Partial<Medicamentos>){
        const medicamentosIndex = this.medicamentos.findIndex(m => m.id === id)
        if(medicamentosIndex === -1){
           return  console.log(`Medicamento con ${id} no encontrado`)
        }
        this.medicamentos[medicamentosIndex] = {...this.medicamentos[medicamentosIndex],...datosActualizados}
        console.log(`medicamento con ID ${id} actualizado con exito`);

    }
    static eliminar(id:number){
        const medicamentoIndex = this.medicamentos.findIndex(m => m.id === id)
        if(medicamentoIndex === -1){
           return console.log("Medicamento no encontrado")
        }
        this.medicamentos.splice(medicamentoIndex,1)
        console.log("El medicamento ha sido eliminado exitosamente")
    }
    static listar(){
        if(this.medicamentos.length === 0){
            return console.log("No hay medicamentos por mostrar")
        }
        console.log("Listas de medicamentos")
        this.medicamentos.forEach(element => {
            console.log(`ID: ${element.id}, Nombre: ${element.nombre}, Cantidad: ${element.cantidad}, Fecha de Caducidad: ${element.fechaCaducidad.toDateString()}, Precio: ${element.precio}`)
        })

    }

}

const medicamento1:Medicamentos = {
    id:1,
    nombre:'acetaminofen',
    cantidad:100,
    fechaCaducidad: new Date('2025-12-31'),
    precio:10
}
const medicamento2:Medicamentos = {
    id:2,
    nombre:'dolex',
    cantidad:20,
    fechaCaducidad: new Date('2024-10-30'),
    precio:10
}

Inventario.agregar(medicamento1);
Inventario.listar()
Inventario.agregar(medicamento2)
Inventario.listar()
Inventario.actualizar(1,{nombre:"parecetamol"})
Inventario.listar()
Inventario.eliminar(2)
Inventario.listar()