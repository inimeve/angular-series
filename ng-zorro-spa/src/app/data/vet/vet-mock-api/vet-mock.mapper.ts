import { VetModel } from 'src/app/core/vet/vet.model';
import { VetMockEntity } from './vet-mock.entity';

export class VetMockMapper {

    mapFrom(vetMockEntity: VetMockEntity): VetModel {
        return {
            id: vetMockEntity.id,
            name: vetMockEntity.name,
            age: vetMockEntity.age,
            address: vetMockEntity.address,
            phone: vetMockEntity.phone
        };
    }

    mapTo(vetModel: VetModel): VetMockEntity {
        return {
            id: vetModel.id,
            name: vetModel.name,
            age: vetModel.age,
            address: vetModel.address,
            phone: vetModel.phone
        };
    }

}
