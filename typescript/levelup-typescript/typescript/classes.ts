/**
 * ! Classes !
 */

class Team {
  teamName: string;

  constructor(teamName = "") {
    this.teamName = teamName;
  }
  score(): number {
    return 52;
  }
}

class Employee {
  private _ssn: number;

  public first: string;
  public last: string;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
    this._ssn = 12345123;
  }

  public get ssn(): number {
    return this._ssn;
  }
}
