package android.api.controller;

import android.api.entity.Orders;
import android.api.service.OrderService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("Orders")
public class OrdersController {

    private OrderService orderService;

    public OrdersController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public void add(@RequestBody Orders orders) {
        this.orderService.add(orders);
    }
    /**
     * 保存订单
     * @param
     * @return
     */
    @PutMapping("{id}")
    public Orders update(@PathVariable Long id, @RequestBody Orders orders) {
        return this.orderService.update(id, orders);
    }

    /**
     * 保存订单
     * @param
     * @return
     */
    @PutMapping("update/{id}")
    public Orders update(@PathVariable Long id, @RequestBody Integer status) {
        return this.orderService.updateStatus(id, status);
    }


    /**
     * 保存订单
     * @param
     * @return
     */
    @PutMapping("default/{id}")
    public Orders defalut(@PathVariable Long id, @RequestBody Orders orders) {
        return this.orderService.defaultOrder(id, orders);
    }
    /**
     * 保存订单
     * @param
     * @return
     */
    @PutMapping("complete/{id}")
    public Orders complete(@PathVariable Long id, @RequestBody Orders orders) {
        return this.orderService.complete(id, orders);
    }

    /**
     * 保存订单
     * @param
     * @return
     */
    @PutMapping("confirm/{id}")
    public Orders confirm(@PathVariable Long id, @RequestBody Orders orders) {
        return this.orderService.confirm(id, orders);
    }

    @GetMapping("{id}")
    public Orders getOrderById(@PathVariable Long id) {
        return this.orderService.getOrderById(id);
    }

    @GetMapping("page")
    public Page<Orders> page(@RequestParam int page, @RequestParam int size) {
        return this.orderService.findAll(PageRequest.of(page, size));
    }

    @GetMapping("pageById")
    public Page<Orders> pageById(@RequestParam int page, @RequestParam int size) {
        return this.orderService.findAllById(PageRequest.of(page, size));
    }

    @GetMapping("pageByStatus")
    public Page<Orders> pageByStatus(@RequestParam int status, @RequestParam int page, @RequestParam int size) {
        return this.orderService.findAllByStatus( status, PageRequest.of(page, size));
    }

    @GetMapping("pageByDriver")
    public Page<Orders> pageByDriver(@RequestParam int page, @RequestParam int size) {
        return this.orderService.findAllByDriver(PageRequest.of(page, size));
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        this.orderService.delete(id);
    }
}