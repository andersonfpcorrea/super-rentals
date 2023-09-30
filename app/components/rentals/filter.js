import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    return (
      this?.args?.rentals?.filter?.((rental) =>
        rental.title.toLowerCase().includes(this.args.query.toLowerCase()),
      ) ?? this?.args?.rentals
    );
  }
}
