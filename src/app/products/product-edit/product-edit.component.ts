import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  id!: number;
  editMode: boolean = false;
  productForm!: FormGroup;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  onSubmit() {
    if (this.editMode) {
      this.productService.updateProduct(this.id, this.productForm.value);
    } else {
      this.productService.addProduct(this.productForm.value);
    }
  }

  addAccessory() {
    (<FormArray>this.productForm.get('accessories')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }

  private initForm() {
    let productName = '';
    let productImageUrl = '';
    let productDescription = '';
    let productAccessories = new FormArray([]);

    if (this.editMode) {
      const product = this.productService.getProduct(this.id);
      productName = product.name;
      productImageUrl = product.imageUrl;
      productDescription = product.description;
      if (product['accessories']) {
        for (let accessory of product.accessories) {
          productAccessories.push(
            new FormGroup({
              'name': new FormControl(accessory.name),
              'amount': new FormControl(accessory.amount)
            })
          )
        }
      }
    }

    this.productForm = new FormGroup({
      'name': new FormControl(productName, Validators.required),
      'imageUrl': new FormControl(productImageUrl, Validators.required),
      'description': new FormControl(productDescription, Validators.required),
      'accessories': productAccessories
    })
  }

  get controls() {
    return (<FormArray>this.productForm.get('accessories')).controls;
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  onDeleteAccessory(index: number) {
    (<FormArray>this.productForm.get('accessories')).removeAt(index);
  }

}
