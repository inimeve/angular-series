import { VetModel } from 'src/app/core/vet/vet.model';
import { VetMockEntity } from './vet-mock.entity';

export class VetMockMapper {

    mapFrom(vetMockEntity: VetMockEntity): VetModel {
        return {
            name: vetMockEntity.name
        };
    }

    mapTo(vetModel: VetModel): VetMockEntity {
        return {
            id: 0,
            name: vetModel.name
        };
    }

}
